import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../../domain/user/user';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  authenticated = false;

  username?: string;

  constructor(
    @Inject('user') public user: User,
  ) {
  }

  get userData(): Backendless.User | {} {
    if (this.user.authenticated) {
      return this.user.attributes;
    } else {
      return {};
    }
  }

  ngOnInit(): void {
    this.user.onUserInited(this.setAuth.bind(this));
  }

  setAuth(user: User): void {
    this.authenticated = user.authenticated;
    this.username = user.attributes.username;
  }

  logout(): void {
    this.user.logout();
  }
}
