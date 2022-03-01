import { Film } from '../../domain/film/film';
import { RemoteRepository } from './remote.repository';
import { RestFilm } from '../libs/rest-film';
import { ErrorFabric } from '../../domain/error/Error.fabric';
import { IFilmRepository } from '../../domain/film/IFilm.repository';

type removeFilmHandler = (film: Film) => void;

export class FilmRepository extends RemoteRepository implements IFilmRepository {
  store = new RestFilm();

  private handlers: { [key: string]: removeFilmHandler[] } = {};

  async onRemoveFilm(handler: removeFilmHandler): Promise<void> {
    if (Object.prototype.hasOwnProperty.call(this.handlers, 'filmRemoved')) {
      this.handlers.filmRemoved.push(handler);
    } else {
      this.handlers.filmRemoved = [handler];
    }
  }

  async onFilmAdded(handler: removeFilmHandler): Promise<void> {
    if (Object.prototype.hasOwnProperty.call(this.handlers, 'filmAdded')) {
      this.handlers.filmAdded.push(handler);
    } else {
      this.handlers.filmAdded = [handler];
    }
  }

  async addFilm(film: Film): Promise<boolean> {
    try {
      await this.store.save(film);
      return true;
    } catch (error) {
      const ErrorClass = ErrorFabric.errorWithCode(error.code);
      throw new ErrorClass(error);
    }
  }

  async removeFilm(film: Film): Promise<boolean> {
    try {
      await this.store.remove(film);
      return true;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async watchedFilm(film: Film): Promise<boolean> {
    try {
      await this.store.save(film);
      return true;
    } catch (error) {
      const ErrorClass = ErrorFabric.errorWithCode(error.code);
      throw new ErrorClass(error);
    }
  }

  async allFilms(): Promise<Film[]> {
    return this.store.find();
  }
}
