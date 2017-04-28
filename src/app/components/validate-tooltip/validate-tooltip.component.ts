import {AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidateMsgService} from './validate-msg.service';

@Component({
  selector: 'app-validate-tooltip',
  templateUrl: './validate-tooltip.component.html',
  styleUrls: ['./validate-tooltip.component.scss'],
  providers: [ValidateMsgService]
})
export class ValidateTooltipComponent implements DoCheck {


  @Input() position: any = 'top'; // 位置

  @Input() control: FormControl;

  errorMessage: string;

  constructor(private vms: ValidateMsgService) {
  }



  ngDoCheck() {
    // console.log(this.control.errors);

    for (const propertyName in this.control.errors) {
      this.errorMessage = this.vms.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      // console.log(this.errorMessage);

    }
  }

}
