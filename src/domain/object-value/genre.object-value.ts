import { GenreDto } from '../genre.dto';

export class GenreObjectValue {
  private attributes: GenreDto;

  constructor(dto: GenreDto) {
    this.attributes = dto;
  }

  get id(): number {
    return this.attributes.id;
  }

  get name(): string {
    return this.attributes.name;
  }

  get attrs(): GenreDto {
    return this.attributes;
  }
}
