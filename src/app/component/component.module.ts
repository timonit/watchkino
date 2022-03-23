import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockFilmListComponent } from '../layout/block-film-list/block-film-list.component';
import { FilmListComponent } from './film-list/film-list.component';
import { InfoComponent } from './info/info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { HeadBlockComponent } from './info/head-block/head-block.component';
import { DetailsComponent } from './info/details/details.component';
import { CastsComponent } from './info/casts/casts.component';
import { VideosComponent } from './info/videos/videos.component';


@NgModule({
  declarations: [
    BlockFilmListComponent,
    FilmListComponent,
    InfoComponent,
    SearchPanelComponent,
    HeadBlockComponent,
    DetailsComponent,
    CastsComponent,
    VideosComponent,
  ],
  exports: [
    BlockFilmListComponent,
    FilmListComponent,
    InfoComponent,
    SearchPanelComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ComponentModule {
}
