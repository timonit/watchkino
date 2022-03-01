import { Film } from './film';

export interface IFilmRepository {
  addFilm(film: Film): Promise<boolean>;

  allFilms(): Promise<Film[]>;
}
