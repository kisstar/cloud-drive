class Receiver {
  execute(..._args: any[]) {
    throw new Error('Command execute method not implemented.')
  }
}

class Command {
  private receiver: Receiver

  constructor(receiver: Receiver) {
    this.receiver = receiver
  }

  execute(...args: any[]) {
    return this.receiver.execute(...args)
  }
}

export { Command, Receiver }
