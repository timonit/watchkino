import { Component, Inject, OnInit } from '@angular/core';
import { Film } from '../../../domain/film/film';
import { FilmRepository } from '../../../infrastructure/repository/FilmRepository';
import { ContentService } from '../../service/content/content.service';

@Component({
  selector: 'app-block-film-list',
  templateUrl: './block-film-list.component.html',
  styleUrls: ['./block-film-list.component.scss'],
})
export class BlockFilmListComponent implements OnInit {
  films: Film[] = [];

  constructor(
    @Inject('filmRepository') private filmRepository: FilmRepository,
    @Inject('content') private contentService: ContentService,
  ) {
  }

  ngOnInit(): void {
    this.fetchFilms();
  }

  async fetchFilms(): Promise<void> {
    this.films = await this.filmRepository.allFilms();
  }

  async watchedFilm(film: Film): Promise<void> {
    await this.filmRepository.watchedFilm(film);
  }

  async getInfo(film: Film): Promise<void> {
    this.contentService.setContent(film);
  }
}
