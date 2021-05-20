import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NotificationService } from './notification.service';
import { User } from '../domain/user/user';
import { Film } from '../domain/film/Film';
import { ContentService } from './content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'watchkino';

  authorized = false;

  constructor(
    @Inject('modal') public modal: ContentService,
    @Inject('user') public user: User,
    public notification: NotificationService,
  ) {
    this.user.onUserInited(this.setAuth.bind(this));
  }

  ngOnInit(): void {
  }

  setAuth(user: User): void {
    this.authorized = user.authenticated;
    setTimeout(() => {
      this.authorized = true;
    }, 3000);
  }
}
