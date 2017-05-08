import { Injectable } from '@angular/core';
import {EventBusService} from './event-bus.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CustomEventBusService extends EventBusService {

  private _other = new Subject<any>();

  other$ = this._other.asObservable();

  constructor() {
    super();

    console.log('CustomEventBusService constructor');
  }


  triggerRefresh(info: any) {
    this._refresh.next({name: '1'});
  }

  triggerOthers(info: any) {
    this._other.next(info);
  }


}


/**
 * 测试 @Injectable() 的作用
 * 如果TestService 本身依赖其他比如customEventBusService, 必须要有@Injectable()
 */
// @Injectable()
export class TestService {
  // constructor(private customEventBusService: CustomEventBusService){
  //   console.log(this.customEventBusService);
  // }
}
