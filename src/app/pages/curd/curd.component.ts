import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RefreshBusService} from './provider/refresh-bus.service';
import {Subscription} from 'rxjs/Subscription';
import {EventBusService} from '../../theme/providers/event-bus.service';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.scss'],
})
export class CurdComponent implements OnInit , OnDestroy {

  display = false;

  subscription: Subscription;

  eventSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute,
              private refreshBusService: RefreshBusService,
              private eventBusService: EventBusService) {
    this.subscription = this.refreshBusService.getRefreshInfo().subscribe((info) => {
      console.log(info);
    });

    this.eventBusService.refresh$.subscribe((info) => {

      console.log(`CurdComponent eventBusService info : ${JSON.stringify(info)}`);
    });


  }

  ngOnInit() {
  }

  add() {
    console.log('add');
    this.display = true;
    this.router.navigate(['./add'], {relativeTo: this.route});
  }

  approve() {
    console.log('approve');
    this.display = true;
    this.router.navigate(['./approve'], {relativeTo: this.route});

  }

  view() {
    this.router.navigate(['./view'], {relativeTo: this.route});

  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
