import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomEventBusService, TestService} from './providers/custom-event-bus.service';
import {EventBusService} from './providers/event-bus.service';

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
    { provide: EventBusService, useClass: CustomEventBusService },
    // TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
