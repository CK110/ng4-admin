import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


export class PInfo {
  email: string;
  address: string;
}

export class UserInfo {
  name: string;
  password: string;
  other?: PInfo;
}


export const needInput = (control: AbstractControl): {[key: string]: boolean} => {
  const email = control.get('email');
  const confirm = control.get('confirm');
  if (!email || !confirm) {
    return null;
  }

  if (email.value !== '') {
    return {needInput: true};
  }

  // return email.value === confirm.value ? null : { nomatch: true };
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [FormBuilder]
})
export class RegisterComponent implements OnInit {

  user: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // 使用传统的方式
    // this.user = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    //   password: new FormControl('', [Validators.required] ),
    //   other: new FormGroup({
    //     email: new FormControl('', [Validators.minLength(2)] ),
    //     address: new FormControl('', [Validators.minLength(3)] )
    //   })
    // });

    // 使用 formBuilder的方式
    this.user = this.fb.group({
      name: ['22', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required]],
      other: this.fb.group({
        email: ['', Validators.minLength(2)],
        confirm: ['', Validators.minLength(2)],
        address: ['', Validators.minLength(3)]
      }, { validator: needInput})
    });
  }

  onSubmit() {

    console.log(this.user.value, this.user.valid);
  }

}
