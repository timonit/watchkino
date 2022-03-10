export class MessageObjectValue {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  value(): string {
    return this.text;
  }
}
