import { Film } from '../../domain/film/film';

export class RestFilm {
  /**
   * Сохраняет фильм
   */
  async save(film: Film): Promise<void> {
  }

  /**
   * Удаление фильма
   */
  async remove(film: Film): Promise<void> {
  }

  /**
   * Найти фильм
   */
  async find(id?: number): Promise<Film[]> {
    return [new Film(
      {
        adult: false,
        backdrop_path: '/rr7E0NoGKxvbkb89e.R1GwfoYjpA.jpg',
        belongs_to_collection: null,
        budget: 63000000,
        genres: [{ id: 18, name: 'Drama' }],
        homepage: 'http://www.foxmovies.com/movies/fight-club',
        id: 550,
        imdb_id: 'tt0137523',
        original_language: 'en',
        original_title: 'Fight Club',
        overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male',
        popularity: 49.158,
        poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        production_companies: [{
          id: 508,
          logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
          name: 'Regency Enterprises',
          origin_country: 'US',
        }],
        production_countries: [{ iso_3166_1: 'DE', name: 'Germany' }],
        release_date: '1999-10-15',
        revenue: 100853753,
        runtime: 139,
        spoken_languages: [{ english_name: 'English', iso_639_1: 'en', name: 'English' }],
        status: 'Released',
        tagline: 'Mischief. Mayhem. Soap.',
        title: 'Fight Club',
        video: false,
        vote_average: 8.4,
        vote_count: 21807,
      },
    )];
  }
}
