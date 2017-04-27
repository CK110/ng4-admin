import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {SidebarModule} from '../theme/components/sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SidebarModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
