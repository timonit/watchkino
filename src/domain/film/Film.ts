import { Entity } from '../base/Entity';
import { FilmInfoDTO } from '../filmDTO';

export class Film extends Entity {
  info: FilmInfoDTO;

  id: number;
  title: string;
  watched = false;
  adult: boolean;
  'backdrop_path'?: string;
  'genre_ids'?: number[];
  'original_language'?: string;
  'original_title'?: string;
  overview?: string;
  popularity?: number;
  'poster_path'?: string;
  'release_date'?: string;
  video: boolean;
  'vote_average'?: number;
  'vote_count'?: number;

  constructor(filmInfo: FilmInfoDTO, watched = false) {
    super();
    this.watched = watched;
    this.infoDTO = filmInfo;
  }

  set infoDTO(dto: FilmInfoDTO) {
    this.info = dto;
    Object.keys(dto).forEach((key) => this[key] = dto[key]);
  }
}
