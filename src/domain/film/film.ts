import { Entity } from '../base/Entity';
import { FilmAttrs } from './film.attrs';

export class Film extends Entity<FilmAttrs> {
  set watched(arg: boolean) {
    this.attrs.watched = arg;
  }

  get watched(): boolean {
    return this.attrs.watched;
  }

  setAttrs(attrs: FilmAttrs): void {
    this.attrs = { ...this.attrs, ...attrs };
  }
}
