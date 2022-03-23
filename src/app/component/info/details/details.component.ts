import { Component, Inject, Input, OnInit } from '@angular/core';
import { Film } from '../../../../domain/film/film';
import { TMDBRepository } from '../../../../infrastructure/repository/TMDBRepository';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() film: Film;

  genres = [];

  constructor(@Inject('TMDBRepository') public tmdbRepository: TMDBRepository,
  ) {
  }

  ngOnInit(): void {
    this.genres = this.film.attrs.genres.map((genre) => {
      return this.tmdbRepository.genres[genre.id];
    });
  }
}
