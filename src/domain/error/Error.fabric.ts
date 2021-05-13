import { DuplicatValueError } from './DuplicatValue.error';

export class ErrorFabric {
  static errorWithCode(code: number): new (...args: any[]) => Error {
    switch (code) {
      case (1155): {
        return DuplicatValueError;
      }
      default: {
        throw new Error('Ошибки с таким кодом не существует');
      }
    }
  }
}
