import { RemoteRepository } from './remote.repository';
import { Film } from '../../domain/film/film';
import { GenreObjectValue } from '../../domain/object-value/genre.object-value';
import { GenreDto } from '../../domain/genre.dto';
import { FilmAttrs } from '../../domain/film/film.attrs';

const auth = {
  key: 'api_key',
  value: '3eb90f31f955e6ee79b496f2707723ea',
};
const authQuery = `${auth.key}=${auth.value}`;
const url = 'https://api.themoviedb.org/3';
const imageUrl = 'https://image.tmdb.org/t/p';

export class TMDBRepository extends RemoteRepository {

  language = 'language=ru-RU';

  genres: { [id: string]: GenreObjectValue } = {};

  state = {
    genres: false,
  };

  constructor() {
    super();
    this.fetchGenres();
  }

  private async fetchGenres(): Promise<void> {
    const fetchURL = `${url}/genre/movie/list?${authQuery}&${this.language}`;
    try {
      let result: { genres: GenreDto[] };
      if (this.cached(fetchURL)) {
        result = this.readCache(fetchURL);
      } else {
        result = await fetch(fetchURL)
          .then((res) => res.json());
        this.putCache(fetchURL, result);
      }

      result.genres.forEach((dto) => {
        this.genres[dto.id] = new GenreObjectValue(dto);
      });
    } catch (error) {
      throw error;
    }
  }

  private cached(addres: string): boolean {
    try {
      const cachedGenre = this.readCache(addres);
      return !!cachedGenre;
    } catch (error) {
      return false;
    }
  }

  async moviesWithTitle(title: string): Promise<Film[]> {
    const results = await fetch(`${url}/search/movie?${authQuery}&${this.language}&query=${title}`);
    const parsed: FilmAttrs[] = await results.json().then((obj) => obj.results);
    return parsed.map((dto) => new Film(dto));
  }

  async getDetailMovie(id: number): Promise<Film> {
    const path = `movie/${id}?append_to_response=videos,images`;
    const response = await fetch(`${url}/${path}&${authQuery}&${this.language}`);
    return new Film(await response.json());
  }

  async getCredit(movieId: number): Promise<any> {
    const path = `/movie/${movieId}/credits`;
    const response = await fetch(`${url}/${path}?${authQuery}&${this.language}`);
    return response.json();
  }
}
