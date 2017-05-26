import { Component, OnInit } from '@angular/core';
import {RefreshBusService, RefreshInfo} from '../provider/refresh-bus.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss'],
  providers: [FormBuilder]
})
export class ApproveComponent implements OnInit {

  myForm: FormGroup;

  constructor(private refreshBusService: RefreshBusService, private fb: FormBuilder) {
    console.log('...ApproveComponent constructor');
  }

  ngOnInit() {
    console.log('...ApproveComponent ngOnInit');

    this.myForm = this.fb.group({
      country: ['', [Validators.required, Validators.minLength(2)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(4)]],
      start: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  submit() {

    console.log(this.myForm.value);

    this.refreshBusService.trigger(<RefreshInfo>{type: 'approve'});
  }

}
