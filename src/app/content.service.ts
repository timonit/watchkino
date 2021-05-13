import { Injectable } from '@angular/core';
import { Film } from '../domain/film/Film';

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  open = false;

  content?: Film;

  loading = false;

  constructor() {
  }

  async asyncSetContent(): Promise<void> {

  }

  setContent(content: Film): void {
    this.content = content;
    this.show();
  }

  clearContent(): void {
    this.content = undefined;
    this.hide();
  }

  show(): void {
    this.open = true;
  }

  hide(): void {
    this.open = false;
  }
}
