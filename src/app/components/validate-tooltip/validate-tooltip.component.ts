import {AfterContentChecked, Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidateMsgService} from './validate-msg.service';

@Component({
  selector: 'app-validate-tooltip',
  templateUrl: './validate-tooltip.component.html',
  styleUrls: ['./validate-tooltip.component.scss'],
  providers: [ValidateMsgService]
})
export class ValidateTooltipComponent implements AfterContentChecked {



  @Input() position: any = 'top'; // 位置

  @Input() control: FormControl;

  errorMessage: string;

  constructor(private vms: ValidateMsgService) {

  }

  ngAfterContentChecked(): void {
    if (this.control.errors) {
      Object.keys(this.control.errors).map(key => {
        this.errorMessage = this.vms.getValidatorErrorMessage(key, this.control.errors[key]);
      });
    }
  }
}
