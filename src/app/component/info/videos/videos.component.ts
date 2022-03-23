import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Film } from '../../../../domain/film/film';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  @Input() film: Film;

  youtube = 'https://www.youtube.com/embed/';

  constructor(
    public sanitizer: DomSanitizer,
  ) {
  }
}
