import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import {AuthGuardService} from '../service/guard/auth-guard.service';
import {AccessGuardService} from '../service/guard/access-guard.service';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuardService, AccessGuardService],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
      },
      { path: 'curd',
        loadChildren: './curd/curd.module#CurdModule'
      },
      { path: 'car',
        loadChildren: ''
      },
      {
        path: 'system',
        loadChildren: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
