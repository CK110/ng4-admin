import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

export class RefreshInfo {
  type: string;   //  操作类型 add || approve || view     （代办任务页面需要使用）
  page?: string;  //  需要进行刷新操作的页面名     （普通页面需要使用）
  result?: any;    //  额外参数
}

@Injectable()
export class RefreshBusService {

  private refresh = new Subject<RefreshInfo>();

  constructor() { }

  trigger(refreshInfo: RefreshInfo) {
    this.refresh.next(refreshInfo);
  }

  getRefreshInfo(): Observable<RefreshInfo> {
    return this.refresh.asObservable();
  }


}
