import { NoCacheError } from './error/no-cache.error';

const CACHE_KEY = 'cache';

export abstract class RemoteRepository {
  static cacheState = false;

  static getCache(): { [url: string]: any } {
    const cache = localStorage.getItem(CACHE_KEY);
    return JSON.parse(cache);
  }

  static saveCache(obj: any): void {
    const value = JSON.stringify(obj);
    localStorage.setItem(CACHE_KEY, value);
  }

  constructor() {
    this.initCache();
  }

  initCache(): void {
    let cache;
    if (!RemoteRepository.cacheState) {
      cache = RemoteRepository.getCache();
      if (cache) {
        RemoteRepository.cacheState = true;
      } else {
        RemoteRepository.saveCache({});
      }
    }
  }

  readCache(url: string): any {
    const cache = RemoteRepository.getCache();
    if (Object.prototype.hasOwnProperty.call(cache, url)) {
      return cache[url];
    } else {
      throw new NoCacheError();
    }
  }

  putCache(url: string, value: any): void {
    const cache = RemoteRepository.getCache();
    cache[url] = value;
    RemoteRepository.saveCache(cache);
  }
}
