import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor( private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (sessionStorage.getItem('currentUser')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (sessionStorage.getItem('currentUser')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
