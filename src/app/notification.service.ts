import { Injectable } from '@angular/core';
import { Notification } from '../domain/notification/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: Notification[] = [];

  constructor() {
    this.removeNotification = this.removeNotification.bind(this);
  }

  addNotification(message: string): void {
    const notification = Notification.create(message);
    notification.onTimeOut(this.removeNotification);
    this.notifications.push(notification);
  }

  removeNotification(notification: Notification): void {
    const id = this.notifications.findIndex((notif) => (notif.id === notification.id));
    if (id > -1) {
      this.notifications.splice(id, 1);
    } else {
      throw new Error('id not found');
    }
  }
}
