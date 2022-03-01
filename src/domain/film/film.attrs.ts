import { GenreAttrs } from './entity/genre/genre.attrs';
import { ProductionCompanyAttrs } from './entity/production-company/production-company.attrs';
import { ProductionCountryValueObject } from './value-object/ProductionCountry.value-object';
import { SpokenLanguageValueObject } from './value-object/SpokenLanguage.value-object';
import { Status } from './types';
import { VideoValueObject } from './value-object/video.value-object';

export type FilmAttrs = {
  adult: false;
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget: number;
  genres: GenreAttrs[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  production_companies: ProductionCompanyAttrs[];
  production_countries: ProductionCountryValueObject[];
  release_date: string;
  revenue: number;
  runtime?: number;
  spoken_languages: SpokenLanguageValueObject[];
  status: Status;
  tagline?: string;
  title: string;
  video: boolean;
  videos?: {
    results: VideoValueObject[]
  };
  vote_average: number;
  vote_count: number;
  watched?: boolean;
};
