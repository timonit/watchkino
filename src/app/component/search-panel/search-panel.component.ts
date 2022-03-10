import { Component, HostListener, Inject, Input } from '@angular/core';
import { TMDBRepository } from '../../../infrastructure/repository/TMDBRepository';
import { ContentService } from '../../service/content/content.service';

interface Attrs {
  title: string;
  id: number;
}

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent {
  @Input() items: Attrs[] = [];

  show = false;

  private timerFinished = true;

  private timer?: number;

  @HostListener('focusin', ['$event']) returnFocus(event: Event): void {
    if (this.items.length) {
      this.show = true;
    }
  }

  constructor(
    @Inject('TMDBRepository') private tmdbRepo: TMDBRepository,
    @Inject('content') private content: ContentService,
  ) {
  }

  async handlerSelect(index: number): Promise<void> {
    const film = await this.tmdbRepo.getDetailMovie(this.items[index].id);

    this.content.setContent(film);
    this.show = false;
  }

  async inputHandler(event: Event): Promise<void> {
    this.timerFinished = false;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const target = event.target as HTMLInputElement;
      if (target.value.length > 2) {
        this.search(target.value);
        this.show = true;
      }
    }, 1000);
  }

  async search(str: string): Promise<void> {
    this.items = await this.tmdbRepo.moviesWithTitle(str)
      .then((result) => result.map((film) => (film.attrs)));
    console.log(this.items[0]);
  }
}
