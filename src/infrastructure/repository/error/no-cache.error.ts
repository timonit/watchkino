import { NO_CACHE_KEY } from './error.const';

export class NoCacheError extends Error {
  code = NO_CACHE_KEY;

  constructor() {
    super('Отсутствует кэш');
  }
}
