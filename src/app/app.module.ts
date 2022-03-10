import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { FilmRepository } from '../infrastructure/repository/FilmRepository';
import { TMDBRepository } from '../infrastructure/repository/TMDBRepository';
import { ContentService } from './service/content/content.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './layout/content/content.component';
import { BlockBodyComponent } from './layout/block-body/block-body.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    BlockBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ComponentModule,
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
      provide: 'content',
      useValue: new ContentService(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
