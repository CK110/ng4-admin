import { Component, OnInit } from '@angular/core';
import {RefreshBusService, RefreshInfo} from '../provider/refresh-bus.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {

  constructor(private refreshBusService: RefreshBusService) {
    console.log('...ApproveComponent constructor');
  }

  ngOnInit() {
    console.log('...ApproveComponent ngOnInit');

  }

  submit() {
    this.refreshBusService.trigger(<RefreshInfo>{type: 'approve'});
  }

}
