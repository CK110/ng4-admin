import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurdComponent} from './curd.component';
import {AddComponent} from './add/add.component';
import {ViewComponent} from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: CurdComponent,
    children: [
      {
        path: 'add', component: AddComponent
      },
      {
        path: 'approve', loadChildren: './approve/approve.module#ApproveModule'
      }
    ]
  },
  {
    path: 'view',
    component: ViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurdRoutingModule { }
