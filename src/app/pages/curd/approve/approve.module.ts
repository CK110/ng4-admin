import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproveRoutingModule } from './approve-routing.module';
import {ApproveComponent} from './approve.component';
import {ButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ApproveRoutingModule,
    ButtonModule
  ],
  declarations: [ApproveComponent]
})
export class ApproveModule { }
