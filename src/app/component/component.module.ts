import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AuthorizationFormComponent } from './authorization-form/authorization-form.component';
import { BlockFilmComponent } from './block-film/block-film.component';
import { ListComponent } from './block-film/list/list.component';
import { InfoComponent } from './block-film/info/info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './block-film/list/item/item.component';
import { SearchPanelComponent} from './search-panel/search-panel.component';
import { SearchListResultComponent } from './search-panel/list/list.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationItemComponent } from './notification-list/notification-item/notification-item.component';
import { UserPanelComponent } from './user-panel/user-panel.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AuthorizationFormComponent,
    BlockFilmComponent,
    ListComponent,
    InfoComponent,
    ItemComponent,
    SearchPanelComponent,
    SearchListResultComponent,
    NotificationListComponent,
    NotificationItemComponent,
    UserPanelComponent,
  ],
  exports: [
    HeaderComponent,
    AuthorizationFormComponent,
    BlockFilmComponent,
    ListComponent,
    InfoComponent,
    SearchPanelComponent,
    NotificationListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class ComponentModule {
}
