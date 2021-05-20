import { Entity } from '../base/Entity';
import Backendless from 'backendless';

type Handler = (user: User) => void;

export class User extends Entity {
  id = 'unknown';

  authenticated = false;

  attributes?: Backendless.User;

  eventListeners: { [key: string]: Handler[] } = {
    userInited: [],
  };

  userInited = false;

  constructor() {
    super();
    this.resetUser();
  }

  private initUser(userDTO: Backendless.User): void {
    this.attributes = userDTO;
    this.id = userDTO.username;
    this.authenticated = true;
    this.userInited = true;
    this.publish('userInited', this);
  }

  publish(eventName: string, data: any): void {
    console.log('Опубликовано событие', eventName);
    this.eventListeners[eventName].forEach((handler) => handler(data));
  }

  onUserInited(handler: Handler): void {
    this.eventListeners.userInited.push(handler);
    if (this.userInited) {
      handler(this);
    }
  }

  async resetUser(): Promise<void> {
    const result = await Backendless.UserService.getCurrentUser();
    if (result) {
      this.initUser(result);
    }
  }

  async authorization(password: string): Promise<User> {
    const result = await Backendless.UserService.login('guest', password, true);
    this.initUser(result);
    return this;
  }

  async logout(): Promise<User> {
    const result = await Backendless.UserService.logout();
    return this;
  }
}
