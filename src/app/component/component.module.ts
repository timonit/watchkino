import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockFilmListComponent } from '../layout/block-film-list/block-film-list.component';
import { FilmListComponent } from './film-list/film-list.component';
import { InfoComponent } from './info/info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { SearchPanelComponent } from './search-panel/search-panel.component';


@NgModule({
  declarations: [
    BlockFilmListComponent,
    FilmListComponent,
    InfoComponent,
    SearchPanelComponent,
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
