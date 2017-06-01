import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomEventBusService, TestService} from './theme/providers/custom-event-bus.service';
import {EventBusService} from './theme/providers/event-bus.service';
import {AuthGuardService} from './service/guard/auth-guard.service';
import {AuthService} from './service/auth.service';
import {AccessGuardService} from './service/guard/access-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    EventBusService,
    // { provide: EventBusService, useClass: CustomEventBusService },

    AuthService,
    AuthGuardService, // 是否登录
    AccessGuardService // 防止登录用户拼接猜测url

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
