import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export class PInfo {
  email: string;
  address: string;
}

export class Login {
  name: string;
  password: string;
  other?: PInfo;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: Login = {name: '', password: '', other: {email: '', address: ''}};


  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit({value, valid}, event: Event): void {

    console.log(JSON.stringify(value));

  }

  toRegisterPage() {
    this.router.navigate(['./register']);
  }


}
