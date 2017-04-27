import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent, SubMenuComponent} from './sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarComponent, SubMenuComponent],
  exports: [SidebarComponent, SubMenuComponent]
})
export class SidebarModule { }
