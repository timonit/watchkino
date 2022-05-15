import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-head-block',
  templateUrl: './head-block.component.html',
  styleUrls: ['./head-block.component.scss'],
})
export class HeadBlockComponent {
  @Input() backdropIMG: string;
  @Input() title: string;
  @Input() originalTitle: string;
  @Input() tagline: string;

  @HostBinding('style') get hostStyle() {
    return {
      backgroundImage: `url(https://image.tmdb.org/t/p/w780/${this.backdropIMG})`,
      backgroundPosition: 'left top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
  }
}
