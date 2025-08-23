import type { Command } from '@/core'

/**
 * Command Controller
 * @description Command Controller is a singleton class that manages commands.
 */
class CommandController {
  private static instance: CommandController
  private commandMap: Map<string, Command>

  private constructor() {
    this.commandMap = new Map()
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new CommandController()
    }

    return this.instance
  }

  register(key: string, command: Command) {
    this.commandMap.set(key, command)
  }

  execute<T>(key: string, ...args: any[]): T {
    if (!this.commandMap.has(key)) {
      throw new Error(`Command ${key} is not registered`)
    }

    return this.commandMap.get(key)?.execute(...args) as unknown as T
  }
}

export { CommandController }
