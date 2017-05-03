import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ValidateTooltipComponent} from './validate-tooltip.component';
import {TooltipModule} from './tooltip';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule
  ],
  declarations: [ValidateTooltipComponent, ],
  exports: [ValidateTooltipComponent, ]
})
export class ValidateTooltipModule { }
