abstract class Receiver {
  execute<T>(..._args: any[]): T {
    throw new Error('Command execute method not implemented.')
  }
}

class Command {
  private receiver: Receiver

  constructor(receiver: Receiver) {
    this.receiver = receiver
  }

  execute<T>(...args: any[]): T {
    return this.receiver.execute<T>(...args)
  }
}

export { Command, Receiver }
