import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { Film } from '../../../domain/film/Film';
import { FilmRepository } from '../../../infrastructure/repository/FilmRepository';
import { TMDBRepository } from '../../../infrastructure/repository/TMDBRepository';
import { ContentService } from '../../content.service';
import { NotificationService } from '../../notification.service';
import loader from '@angular-devkit/build-angular/src/webpack/plugins/single-test-transform';

@Component({
  selector: 'app-block-film',
  templateUrl: './block-film.component.html',
  styleUrls: ['./block-film.component.scss'],
})
export class BlockFilmComponent implements OnInit {
  films: Film[] = [];

  form = { search: '' };

  loading = false;

  constructor(
    @Inject('filmRepository') private filmRepository: FilmRepository,
    @Inject('TMDBRepository') private tmdbRepository: TMDBRepository,
    @Inject('modal') private contentService: ContentService,
    @Inject('notification') private notification: NotificationService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.filmRepository.onRemoveFilm(this.removeFilm.bind(this));
    this.filmRepository.onFilmAdded(this.addFilm.bind(this));
    this.fetchFilms();
  }

  async addFilm(film: Film): Promise<void> {
    this.films.push(film);
  }

  async removeFilm(film: Film): Promise<void> {
    const filmIndex = this.films.findIndex((filmItem) => (filmItem.id === film.id));
    if (filmIndex > -1) {
      this.films.splice(filmIndex, 1);
    }
  }

  async fetchFilms(): Promise<void> {
    this.films = await this.filmRepository.allFilms();
    this.loading = false;
  }

  async watchedFilm(film: Film): Promise<void> {
    await this.filmRepository.filmWatched(film);
    this.notification.addNotification(`Фильм ${film.title} ${film.watched ? 'просмотрен' : 'убран из просмотренных'}`);
  }

  async getInfo(film: Film): Promise<void> {
    this.contentService.setContent(film);
  }
}
