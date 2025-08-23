import type { Command, Context, Receiver } from '@cloud-drive/system-core'

interface CommandInfo {
  name: string
  Command: typeof Command
  Receiver: typeof Receiver
}

const commandsInfo = import.meta.glob<CommandInfo>(['./*.ts', '!./index.ts'], { eager: true })

/**
 * Register commands
 * @param ctx Context environment for registering commands to the system
 */
function registerCommands(ctx: Context) {
  Object.keys(commandsInfo).forEach((moduleFile) => {
    const commandInfo = commandsInfo[moduleFile]
    const { name, Command: C, Receiver: R } = commandInfo

    ctx.commandController.register(name, new C(new R()))
  })
}

export { registerCommands }
