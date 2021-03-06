import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproveRoutingModule } from './approve-routing.module';
import {ApproveComponent} from './approve.component';
import {ButtonModule, InputTextModule, TooltipModule} from 'primeng/primeng';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidateTooltipModule} from '../../../theme/components/validate-tooltip/validate-tooltip/validate-tooltip.module';
import {ValidateTooltipDirectiveDirective} from '../../../theme/directive/validate-tooltip/validate-tooltip-directive.directive';

@NgModule({
  imports: [
    CommonModule,
    ApproveRoutingModule,
    ButtonModule,
    TooltipModule,
    ReactiveFormsModule,
    InputTextModule,
    ValidateTooltipModule
  ],
  declarations: [ApproveComponent, ValidateTooltipDirectiveDirective]
})
export class ApproveModule { }
