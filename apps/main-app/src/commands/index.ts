import type { Command, Context, Receiver } from '@cloud-drive/system-core'

interface CommandInfo {
  name: string
  Command: typeof Command
  Receiver: typeof Receiver
}

const commandsInfo = import.meta.glob<CommandInfo>(['./*.ts', '!./index.ts'], { eager: true })

/**
 * 注册命令
 * @param ctx 上下文环境，用于注册命令到系统中
 */
function registerCommands(ctx: Context) {
  Object.keys(commandsInfo).forEach((moduleFile) => {
    const commandInfo = commandsInfo[moduleFile]
    const { name, Command: C, Receiver: R } = commandInfo

    ctx.commandController.register(name, new C(new R()))
  })
}

export { registerCommands }
