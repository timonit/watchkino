import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { FilmRepository } from '../infrastructure/repository/FilmRepository';
import Backendless from 'backendless';
import { TMDBRepository } from '../infrastructure/repository/TMDBRepository';
import { ContentService } from './content.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from './notification.service';
import { User } from '../domain/user/user';

const APP_ID = '4C8842DD-1D7E-4DC1-9558-8DE1B2D22DB4';
const APP_KEY = 'E0E32AFE-1118-42E7-913F-063D5986C784';

Backendless.serverURL = 'https://eu-api.backendless.com';
Backendless.initApp(APP_ID, APP_KEY);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: 'filmRepository',
      useClass: FilmRepository,
    },
    {
      provide: 'TMDBRepository',
      useValue: new TMDBRepository(),
    },
    {
      provide: 'modal',
      useValue: new ContentService(),
    },
    {
      provide: 'notification',
      useValue: new NotificationService(),
    },
    {
      provide: 'user',
      useClass: User,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
