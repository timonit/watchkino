import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragrah',
  templateUrl: './paragrah.component.html',
  styleUrls: ['./paragrah.component.scss']
})
export class ParagrahComponent {
  @Input() title: string;
}
