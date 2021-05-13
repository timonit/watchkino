import { FilmInfoDTO } from './filmDTO';

export type SearchFilmDto = {
  page: number,
  results: FilmInfoDTO[],
  total_pages: number,
  total_results: number,
};
