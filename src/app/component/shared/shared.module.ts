import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    ButtonComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    DropdownComponent,
  ],
})
export class SharedModule { }
