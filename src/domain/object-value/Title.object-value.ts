export class TitleObjectValue {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  get value(): string {
    return this.title;
  }
}
