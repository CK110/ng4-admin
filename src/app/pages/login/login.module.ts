import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from './login.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';
import {PrettyPrintPipe} from '../../theme/pipe/util.pipe';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    InputTextModule
  ],
  declarations: [LoginComponent, PrettyPrintPipe],
})
export class LoginModule { }
