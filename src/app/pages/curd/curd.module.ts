import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurdRoutingModule } from './curd-routing.module';
import {CurdComponent} from './curd.component';
import {ButtonModule, CalendarModule, DialogModule, DropdownModule, InputTextModule, PanelModule} from 'primeng/primeng';
import { AddComponent } from './add/add.component';
import {ViewComponent} from './view/view.component';
import {RefreshBusService} from './provider/refresh-bus.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidateExpandDirective} from '../../directive/validate-expand.directive';
import {CalendarCompareBigDirective, CalendarCompareSmallDirective} from '../../directive/calendar-compare.directive';
import {IfRequiredDirective} from '../../directive/if-required.directive';
import {CalendarRangeDirective} from '../../directive/calendar-range.directive';
import {TooltipModule} from 'ngx-tooltip';

const ComponentModule = [
  PanelModule,
  ButtonModule,
  InputTextModule,
  DropdownModule,
  DialogModule,
  CalendarModule,
  TooltipModule
];

const Directives = [
  ValidateExpandDirective,
  CalendarCompareSmallDirective,
  CalendarCompareBigDirective,
  IfRequiredDirective,
  CalendarRangeDirective
];

@NgModule({
  imports: [
    CommonModule,
    CurdRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    TooltipModule,
],
  declarations: [
    CurdComponent,
    AddComponent,
    ViewComponent,
    Directives
  ],
  providers: [RefreshBusService]
})
export class CurdModule { }
