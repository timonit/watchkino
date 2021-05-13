import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TMDBRepository } from '../../../infrastructure/repository/TMDBRepository';
import { Film } from '../../../domain/film/Film';
import { FilmRepository } from '../../../infrastructure/repository/FilmRepository';
import { NotificationService } from '../../notification.service';

enum FilmFindStatus {
  FILM_NOT_FOUND = 'Ничего не найдено',
}

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  form = this.fb.group({
    title: [''],
  });

  notFound: string;

  searchResult: Film[] | FilmFindStatus[] = [];

  constructor(
    @Inject('TMDBRepository') private tmdb: TMDBRepository,
    @Inject('filmRepository') private filmRepository: FilmRepository,
    @Inject('notification') private notification: NotificationService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  async saveFilm(film: Film): Promise<void> {
    try {
      await this.filmRepository.add(film);
      this.notification.addNotification(`Добавлен фильм ${film.title}`);
    } catch (error) {
      console.error(error);
    }
  }

  changeTitle(): void {
    if (this.form.get('title').value === '') {
      this.clear();
    }
  }

  async search(event: Event): Promise<void> {
    event.preventDefault();
    const title = this.form.get('title').value;
    const result = await this.tmdb.moviesWithTitle(title);
    if (result.length) {
      this.notFound = undefined;
      this.searchResult = result;
    } else {
      this.notFound = FilmFindStatus.FILM_NOT_FOUND;
    }
  }

  clear(): void {
    this.notFound = undefined;
    this.searchResult = [];
  }
}
