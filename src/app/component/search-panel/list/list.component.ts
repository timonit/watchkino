import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Film } from '../../../../domain/film/Film';
import { ContentService } from '../../../content.service';
import { TMDBRepository } from '../../../../infrastructure/repository/TMDBRepository';

@Component({
  selector: 'app-search-list-result',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class SearchListResultComponent implements OnInit {
  @Input()
  list: Film[] = [];

  @Input()
  notFound: string;

  @Output()
  savedFilm = new EventEmitter<Film>();

  constructor(
    @Inject('modal') private contentService: ContentService,
    @Inject('TMDBRepository') private tmdbRepository: TMDBRepository,
  ) {
  }

  ngOnInit(): void {
  }

  async getInfo(film: Film): Promise<void> {
    const filmDetail = await this.tmdbRepository.getDetailMovie(film.id);
    console.log('getInfo', filmDetail);
    this.contentService.setContent(
      filmDetail,
      [
        {
          handler: this.save.bind(this),
          title: 'Добавить'
        },
      ]
    );
  }

  save(event: Event, film: Film): void {
    event.stopPropagation();
    this.savedFilm.emit(film);
  }
}
