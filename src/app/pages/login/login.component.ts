import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

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


  constructor(private router: Router, private http: Http) {

  }

  ngOnInit() {
  }

  onSubmit({value, valid}, event: Event): void {

    console.log(JSON.stringify(value));

    alert(`${this.model.name} ::: ${this.model.password}`);

    this.http.post('http://localhost:8080/api/authentication',
        { name: this.model.name,
          password: this.model.password
        })
      .subscribe( (res: any) => {
        console.log(res);
      });

  }

  toRegisterPage() {
    this.router.navigate(['./register']);
  }


}
