interface Handler<T, K> {
  setNext(handler: Handler<T, K>): Handler<T, K>;

  handle(request: T): K | undefined;
}

export abstract class AbstractHandler<T, K> implements Handler<T, K> {
  private nextHandler?: Handler<T, K>;

  public setNext(handler: Handler<T, K>): Handler<T, K> {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: T): K | undefined {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return undefined;
  }
}
