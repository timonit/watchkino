import {
  Component,
  Inject,
} from '@angular/core';
import { NotificationService } from './service/notification/notification.service';
import { ContentService } from './service/content/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'watchkino';

  constructor(
    @Inject('content') public content: ContentService,
    public notification: NotificationService,
  ) {
  }
}
