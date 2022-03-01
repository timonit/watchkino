export abstract class Entity<T> {
  attrs: T;

  constructor(attrs: T) {
    this.attrs = attrs;
  }
}
