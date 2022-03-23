import { Component, Inject, Input, OnInit } from '@angular/core';
import { TMDBRepository } from '../../../../infrastructure/repository/TMDBRepository';
import { Film } from '../../../../domain/film/film';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.scss']
})
export class CastsComponent implements OnInit {
  @Input() film: Film;

  casts = [];

  firsts = [];

  constructor(
    @Inject('TMDBRepository') public tmdbRepository: TMDBRepository,
  ) {
  }

  async ngOnInit(): Promise<void> {
    const credits = await this.tmdbRepository.getCredit(this.film.attrs.id);
    this.casts = credits.cast;
    this.firsts = this.casts.slice(0, 5);
  }
}
