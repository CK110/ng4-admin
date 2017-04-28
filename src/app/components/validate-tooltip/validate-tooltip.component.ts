import {AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidateMsgService} from './validate-msg.service';

@Component({
  selector: 'app-validate-tooltip',
  templateUrl: './validate-tooltip.component.html',
  styleUrls: ['./validate-tooltip.component.scss'],
  providers: [ValidateMsgService]
})
export class ValidateTooltipComponent implements OnInit, AfterViewChecked, OnChanges, DoCheck {


  @Input() position: string; // 位置

  @Input() control: FormControl;

  errorMessage = '22';



  constructor(private vms: ValidateMsgService) {
  }

  ngOnInit() {
    this.position = 'top';


  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngDoCheck() {
    // console.log(this.control.errors);

    for (const propertyName in this.control.errors) {
      this.errorMessage = this.vms.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      // console.log(this.errorMessage);

    }
  }

  ngAfterViewChecked(): void {



  }



}
