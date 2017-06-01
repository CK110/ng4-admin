import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export const USER_HAS_RIGHT = [
  '',
  '/pages/curd',
  '/pages/curd/add',
]


@Injectable()
export class AccessGuardService implements CanActivate{


  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    debugger;

    const targetUrl = state.url;

    if (USER_HAS_RIGHT.indexOf(targetUrl) === -1) {
      this.router.navigate(['./login'])
      return false;
    }

    return true;
  }

}
