import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../../../../../domain/film/Film';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {

  @Input() film: Film;

  @Output() deletedFilm = new EventEmitter<Film>();

  async delete(film: Film): Promise<void> {
    this.deletedFilm.emit(film);
  }
}
