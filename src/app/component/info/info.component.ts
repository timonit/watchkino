import { Component, Inject, Input } from '@angular/core';
import { Film } from '../../../domain/film/film';
import { TMDBRepository } from '../../../infrastructure/repository/TMDBRepository';
import { FilmRepository } from '../../../infrastructure/repository/FilmRepository';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() info: Film;

  constructor(
    @Inject('TMDBRepository') public tmdbRepository: TMDBRepository,
    @Inject('filmRepository') private filmRepo: FilmRepository,
  ) {
  }

  async addFilm(): Promise<void> {
    const result = await this.filmRepo.addFilm(this.info);
    console.log(result);
  }
}
