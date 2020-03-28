type KeyboardEventType = ('keydown' | 'keyup');


class Keyboard {
  private context: (Window | HTMLElement);

  constructor(context) {
    this.context = context;
  }

  listen(type: KeyboardEventType, handler: (event: KeyboardEvent) => void) {
    this.context.addEventListener(type, handler);
  }
}


export {
  Keyboard,
};
