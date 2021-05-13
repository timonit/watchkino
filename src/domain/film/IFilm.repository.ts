import { Film } from './Film';

export interface IFilmRepository {
  add(film: Film): Promise<boolean>;

  allFilms(): Promise<Film[]>;

  // filmWithName(name: string): Promise<Film>;
  //
  // moviesWithTitle(title: string): Promise<Film[]>;
}
