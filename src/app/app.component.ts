import {
  ChangeDetectorRef,
  Component,
  Directive,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Film } from '../domain/film/Film';
import { NotificationService } from './notification.service';
import { User } from '../domain/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'watchkino';

  auth = {
    authorized: false,
  };

  authorized = false;

  constructor(
    @Inject('modal') public modal: { open: boolean, content?: Film, loading: false },
    @Inject('notification') public notification: NotificationService,
    @Inject('user') public user: User,
  ) {
    this.user.onUserInited(this.setAuth.bind(this));
  }

  ngOnInit(): void {
    console.log('app comp', this.auth);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', this.auth);
  }

  setAuth(user: User): void {
    this.auth = { authorized: user.authenticated };
    console.log('event', user, this.auth);
  }
}
