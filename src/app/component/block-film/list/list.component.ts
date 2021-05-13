import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FilmRepository } from '../../../../infrastructure/repository/FilmRepository';
import { Film } from '../../../../domain/film/Film';
import { NotificationService } from '../../../notification.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  @Input()
  list: Film[] = [];

  @Output()
  selectedFilm = new EventEmitter<Film>();

  @Output()
  filmWatched = new EventEmitter<Film>();

  info: Film;

  constructor(
    @Inject('filmRepository') private filmRepository: FilmRepository,
    @Inject('notification') private notification: NotificationService,
  ) {
  }

  async getInfo(film: Film): Promise<void> {
    this.selectedFilm.emit(film);
  }

  async markAsWatched(watched: boolean, film: Film): Promise<void> {
    film.watched = watched;
    this.filmWatched.emit(film);
  }

  async deleteFilm(film: Film): Promise<void> {
    try {
      this.filmRepository.removeFilm(film);
      this.notification.addNotification(`Фильм '${film.title}' был убран из списка`);
    } catch (error) {
      throw error;
    }
  }
}
