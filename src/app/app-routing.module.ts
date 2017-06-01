import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadingStrategy, Route} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {AuthGuardService} from './service/guard/auth-guard.service';

export class AppCustomPreloader implements PreloadingStrategy {

  preload(route: Route, load: Function): Observable<any> {

    return route.data && route.data['preload'] ? load() : Observable.of(null);

  }
}


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule',
    data: {preload: true}  // 预加载
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterModule',
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
  },
  { path: '**', redirectTo: 'pages' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
