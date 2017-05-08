import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurdRoutingModule } from './curd-routing.module';
import {CurdComponent} from './curd.component';
import {
  AutoCompleteModule, ButtonModule, CalendarModule, ChipsModule, DialogModule, DropdownModule, InputTextModule,
  PanelModule
} from 'primeng/primeng';
import { AddComponent } from './add/add.component';
import {ViewComponent} from './view/view.component';
import {RefreshBusService} from './provider/refresh-bus.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarRangeDirective} from '../../theme/directive/calendar-range.directive';
import {TooltipModule} from 'ngx-tooltip';
import {ValidateTooltipModule} from '../../theme/components/validate-tooltip/validate-tooltip/validate-tooltip.module';
import {ValidateMsgService} from '../../theme/components/validate-tooltip/providers/validate-msg.service';


const ComponentModule = [
  PanelModule,
  ButtonModule,
  InputTextModule,
  DropdownModule,
  DialogModule,
  CalendarModule,
  TooltipModule,
  ValidateTooltipModule,
  AutoCompleteModule,
  ChipsModule
];

const Directives = [
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
  providers: [RefreshBusService, ValidateMsgService]
})
export class CurdModule { }
