import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [FormBuilder]
})
export class ViewComponent implements OnInit {

  myForm: FormGroup;

  display: boolean = false;


  constructor(private fb: FormBuilder) {
    console.log('...ViewComponent constructor');
  }

  ngOnInit() {

    console.log('...ViewComponent ngOnInit');

    this.myForm = this.fb.group({
      date: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.minLength(4)]],
      start: ['', [Validators.minLength(4)]],
      country: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(2)]],
      end: ['', [Validators.required, Validators.minLength(2)]]
    });

  }

  showDialog() {
    this.display = true;
  }

}
