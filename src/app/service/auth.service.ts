import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

// {
//   token:'hasklaljslkaj.sjlkajsajlkjs.sjsjaljls',
//   currentUser: '{}'
// }

/**
 * 注册 登录 service
 */
@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) { }


  login(name: string, password: string) {
    // this.http.post('http://localhost:8080/api/authentication',
    //   { name: name, password: password}).subscribe( (res) => {
    //   if (!res['data'].error) {
    //       sessionStorage.setItem('token', res['data'].token)
    //       sessionStorage.setItem('currentUser', JSON.stringify(res['data'].user));
    //
    //       this.router.navigate(['./pages']);
    //     }
    // });


    setTimeout(() => {
        sessionStorage.setItem('token', '222222222222')
        sessionStorage.setItem('currentUser', name);
        this.router.navigate(['./pages']);
    }, 1000 );
  }


  logout() {

  }

}
