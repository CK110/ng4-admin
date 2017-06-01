import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {AuthService} from '../../service/auth.service';

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


  constructor(private router: Router, private http: Http, private authService: AuthService) {

  }

  ngOnInit() {
  }

  onSubmit({value, valid}, event: Event): void {

    console.log(JSON.stringify(value));

    this.authService.login(this.model.name,this.model.password);
  }

  toRegisterPage() {
    this.router.navigate(['./register']);
  }


}
