import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../../../domain/notification/notification';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {
  @Input()
  notificationList: Notification[] = [];

  list = [
    { message: { text: 'asdsadd' } },
    { message: { text: 'afcxbcv' } },
    { message: { text: 'qaaaaaaaaaaaaaa' } },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
