import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ParagrahComponent } from './paragrah/paragrah.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';



@NgModule({
  declarations: [
    ButtonComponent,
    DropdownComponent,
    ParagrahComponent,
    ListComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    DropdownComponent,
    ParagrahComponent,
    ListComponent,
    ListItemComponent,
  ],
})
export class SharedModule { }
