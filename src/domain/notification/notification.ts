import { MessageObjectValue } from '../object-value/message.object-value';

type Handler = (notification: Notification) => void;

export class Notification {
  static currentId = 0;

  id: number;

  message: MessageObjectValue;

  timedOutHandlers: Handler[] = [];

  static nextId(): number {
    const id = Notification.currentId;
    Notification.currentId += 1;
    return id;
  }

  static create(text: string): Notification {
    const message = new MessageObjectValue(text);
    return new Notification(message, Notification.nextId());
  }

  constructor(message: MessageObjectValue, id: number, timer?: number) {
    this.message = message;
    if (timer) {
      this.setTimer(timer);
    } else {
      this.setTimer(5000);
    }
  }

  onTimeOut(cb: Handler): void {
    this.timedOutHandlers.push(cb);
  }

  setTimer(timer: number): void {
    setTimeout(
      () => {
        this.timedOutHandlers.forEach((handler) => handler(this));
      },
      timer,
    );
  }
}
