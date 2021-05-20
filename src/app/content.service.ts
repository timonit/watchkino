import { Injectable } from '@angular/core';
import { Film } from '../domain/film/Film';
import {IButton} from './types';

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  open = false;

  content?: Film;

  loading = false;

  btns?: IButton[];

  constructor() {
  }

  async asyncSetContent(): Promise<void> {

  }

  setContent(content: Film, btns?: IButton[]): void {
    this.content = content;
    this.btns = btns;
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
