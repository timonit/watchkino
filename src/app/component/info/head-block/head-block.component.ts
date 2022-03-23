import { Component, Input } from '@angular/core';

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
}
