import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor() {
    console.log('...ViewComponent constructor');
  }

  ngOnInit() {

    console.log('...ViewComponent ngOnInit');

  }

}
