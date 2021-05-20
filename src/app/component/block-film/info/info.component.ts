import { Component, Inject, Input, OnInit } from '@angular/core';
import { Film } from '../../../../domain/film/Film';
import { TMDBRepository } from '../../../../infrastructure/repository/TMDBRepository';
import { IButton } from '../../../types';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input()
  info: Film;

  @Input()
  btns?: IButton[];

  constructor(
    @Inject('TMDBRepository') public tmdbRepository: TMDBRepository,
  ) {
  }

  ngOnInit(): void {
  }
}
