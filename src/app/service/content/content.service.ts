import { Injectable } from '@angular/core';
import { Film } from '../../../domain/film/film';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  open = false;

  content?: Film;

  setContent(content: Film): void {
    this.content = content;
    this.show();
  }

  show(): void {
    this.open = true;
  }

  hide(): void {
    this.open = false;
  }
}
