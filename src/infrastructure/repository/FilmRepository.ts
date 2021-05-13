import { Film } from '../../domain/film/Film';
import { FilmInfoDTO } from '../../domain/filmDTO';
import { RemoteRepository } from './remote.repository';
import Backendless from 'backendless';
import { ErrorFabric } from '../../domain/error/Error.fabric';
import { IFilmRepository } from '../../domain/film/IFilm.repository';

type removeFilmHandler = (film: Film) => void;

export class FilmRepository extends RemoteRepository implements IFilmRepository {
  store: Backendless.DataStore = Backendless.Data.of('Film');

  channels: { [key: string]: Backendless.ChannelClass } = {};

  private handlers: { [key: string]: removeFilmHandler[] } = {};

  constructor() {
    super();
    this.channels.filmRemoved = Backendless.Messaging.subscribe('filmRemoved');
    this.channels.filmAdded = Backendless.Messaging.subscribe('filmAdded');
    this.channels.filmRemoved.addMessageListener(this.removeFilmHandler.bind(this));
    this.channels.filmAdded.addMessageListener(this.addedFilmHandler.bind(this));
  }

  private removeFilmHandler(dto: { message: FilmInfoDTO }): void {
    if (Object.prototype.hasOwnProperty.call(this.handlers, 'filmRemoved')) {
      const film = new Film(dto.message);
      this.handlers.filmRemoved.forEach((handler) => (handler(film)));
    }
  }

  private addedFilmHandler(dto: { message: FilmInfoDTO }): void {
    if (Object.prototype.hasOwnProperty.call(this.handlers, 'filmAdded')) {
      const film = new Film(dto.message);
      this.handlers.filmAdded.forEach((handler) => (handler(film)));
    }
  }

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

  async add(film: Film): Promise<boolean> {
    try {
      const addedFilm = await this.store.save<Film>(film);
      this.channels.filmAdded.publish(addedFilm);
      return true;
    } catch (error) {
      const ErrorClass = ErrorFabric.errorWithCode(error.code);
      throw new ErrorClass(error);
    }
  }

  async removeFilm(film: Film): Promise<boolean> {
    try {
      await this.store.remove(film);
      this.channels.filmRemoved.publish(film);
      return true;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async filmWatched(film: Film): Promise<boolean> {
    try {
      await this.store.save<Film>(film);
      return true;
    } catch (error) {
      const ErrorClass = ErrorFabric.errorWithCode(error.code);
      throw new ErrorClass(error);
    }
  }

  async allFilms(): Promise<Film[]> {
    console.log('allFilms finished');
    const query = Backendless.DataQueryBuilder.create();
    query.setPageSize(100);
    const result: FilmInfoDTO[] = await this.store.find(query);
    return result.map((dto) => new Film(dto, dto.watched));
  }

  async moviesWithTitle(title: string): Promise<Film[]> {
    const query = Backendless.DataQueryBuilder.create();
    query.setWhereClause(`title = '${title}'`);
    return this.store.find<Film>(query);
  }
}
