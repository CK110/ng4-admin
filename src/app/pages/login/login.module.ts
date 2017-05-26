import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from './login.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';
import {PrettyPrintPipe} from '../../theme/pipe/util.pipe';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    InputTextModule,
    HttpModule
  ],
  declarations: [LoginComponent, PrettyPrintPipe],
})
export class LoginModule { }
