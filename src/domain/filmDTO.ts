export type FilmInfoDTO = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  watched?: boolean,
  tagline?: string,
  status?: string,
  budget?: number,
  revenue?: number,
  production_countries?: { name: string }[],
  videos?: {
    results: {
      key: string,
      type: string,
      name: string,
    }[],
  },
};

export class FilmInfoDto {
  adult: boolean;
  'backdrop_path': string;
  'genre_ids': number[];
  id: number;
  'original_language': string;
  'original_title': string;
  overview: string;
  popularity: number;
  'poster_path': string;
  'release_date': string;
  title: string;
  video: boolean;
  'vote_average': number;
  'vote_count': number;
}


const filmDTOInstance: FilmInfoDTO = {
  adult: false,
  backdrop_path: '/6IcUnLvekFlt1fSRNY5YFpnwGiK.jpg',
  genre_ids: [28, 35, 53, 80, 10749],
  id: 12251,
  original_language: 'en',
  original_title: 'Mo\' Money',
  overview: 'Джонни .',
  popularity: 9.115,
  poster_path: '/g7jLNhHGMeXxleRpwVFJOgQNwB1.jpg',
  release_date: '1992-07-24',
  title: 'Больше денег',
  video: false,
  vote_average: 5.5,
  vote_count: 93,
};
