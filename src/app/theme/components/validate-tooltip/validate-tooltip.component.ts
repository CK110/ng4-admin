import {AfterContentChecked, Component, DoCheck, Input, KeyValueDiffer, KeyValueDiffers} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidateMsgService} from './validate-msg.service';

@Component({
  selector: 'app-validate-tooltip',
  templateUrl: './validate-tooltip.component.html',
  styleUrls: ['./validate-tooltip.component.scss'],
  providers: [ValidateMsgService]
})
export class ValidateTooltipComponent implements AfterContentChecked,DoCheck {



  @Input() position: any = 'top'; // 位置

  @Input() control: FormControl;

  errorMessage: string;

  differ: any;

  constructor(private vms: ValidateMsgService, private differs: KeyValueDiffers) {
    this.differ = differs.find([]).create(null);
  }

  ngDoCheck() {
      const changes = this.differ.diff(this.control);
  }

  ngAfterContentChecked(): void {


    if (this.control.errors) {
      Object.keys(this.control.errors).map(key => {
        this.errorMessage = this.vms.getValidatorErrorMessage(key, this.control.errors[key]);
      });
    }
  }
}
