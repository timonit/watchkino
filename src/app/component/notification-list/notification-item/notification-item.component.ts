import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../../../../domain/notification/notification';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss']
})
export class NotificationItemComponent implements OnInit {
  @Input()
  notification: Notification;

  constructor() { }

  ngOnInit(): void {
  }

}
