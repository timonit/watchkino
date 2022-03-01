import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FilmRepository } from '../../../infrastructure/repository/FilmRepository';
import { Film } from '../../../domain/film/film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
})
export class FilmListComponent {
  @Input()
  list: Film[] = [];

  @Output()
  selectedFilm = new EventEmitter<Film>();

  @Output()
  filmWatched = new EventEmitter<Film>();

  constructor(
    @Inject('filmRepository') private filmRepository: FilmRepository,
  ) {
  }

  async selectFilm(film: Film): Promise<void> {
    this.selectedFilm.emit(film);
  }

  async markAsWatched(watched: boolean, film: Film): Promise<void> {
    film.watched = watched;
    this.filmWatched.emit(film);
  }

  async deleteFilm(film: Film): Promise<void> {
    try {
      this.filmRepository.removeFilm(film);
    } catch (error) {
      throw error;
    }
  }
}
