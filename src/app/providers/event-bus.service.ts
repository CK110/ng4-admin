import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EventBusService {

  _refresh = new Subject<any>();

  refresh$ = this._refresh.asObservable();

  constructor() {
    console.log('EventBusService constructor');
  }

  triggerRefresh(info: any) {
    this._refresh.next(info);
  }
}
