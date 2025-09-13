import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

interface MockRule {
  match: RegExp
  pathname?: (pathname: string) => string
  data?: Record<string, unknown>
}

interface MockServerPluginOptions {
  mockDir?: string
  rules?: MockRule[]
}

/**
 * Read mock data file
 * @param filePath File path
 * @returns Parsed data object
 */
function readMockFile(filePath: string): Record<string, unknown> {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

/**
 * Find matching rule
 * @param rules Mock rules
 * @param pathname Current request path
 * @returns Matching rule or undefined
 */
function findMatchingRule(rules: MockRule[], pathname: string): MockRule | undefined {
  return rules.find(rule => rule.match.test(pathname))
}

/**
 * Send JSON response
 * @param res Response object
 * @param data Response data
 * @param code Status code
 * @param message Message
 */
function sendJsonResponse(
  res: ServerResponse<IncomingMessage>,
  data: unknown = {},
  code: number = 0,
  message: string = code === 0 ? 'success' : 'mock server error',
) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    code,
    message,
    data,
  }))
}

function mockServer(options?: MockServerPluginOptions): Plugin {
  const { mockDir = 'mock', rules = [] } = options || {}
  const defaultPathnameFn = (pathname: string) => pathname

  return {
    name: 'mock-server',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = new URL((req.url || ''), 'http://localhost').pathname
        const rule = findMatchingRule(rules, pathname)

        if (rule) {
          try {
            const pathnameFn = rule.pathname || defaultPathnameFn
            const filePath = path.join(process.cwd(), mockDir, `${pathnameFn(pathname)}.json`)
            const data = rule.data || readMockFile(filePath)

            sendJsonResponse(res, data)
          }
          catch (e) {
            console.error(e)
            sendJsonResponse(res, null, -1)
          }
        }
        else {
          next()
        }
      })
    },
  }
}

export { mockServer }
