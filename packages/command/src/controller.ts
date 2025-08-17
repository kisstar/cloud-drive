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

  execute<T>(key: string, ...args: any[]) {
    return this.commandMap.get(key)?.execute<T>(...args)
  }
}

export { CommandController }
