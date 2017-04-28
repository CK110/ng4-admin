import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {EventBusService} from '../../../providers/event-bus.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export class Filter {
  startEnterDate: string;
  endEnterDate: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [FormBuilder]
})
export class AddComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  filter: FormGroup;


  constructor(private router: Router,
              private eventBusService: EventBusService,
              private fb: FormBuilder) {
    console.log('...AddComponent constructor');

  }

  ngOnInit() {
    console.log('...AddComponent ngOnInit');

    this.filter = this.fb.group({
      startEnterDate: ['', [Validators.required]],
      endEnterDate: ['', [Validators.required]],
      startLeaveDate: ['', [Validators.required]],
      endLeaveDate: ['', [Validators.required]],
      country: ['', [Validators.minLength(3)]],
      city: ['', [Validators.minLength(4)]],
      address: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  submit() {
    // this.router.navigate(['./curd']);

    this.eventBusService.triggerRefresh({name: '2'});

  }

  ngOnDestroy(): void {
    console.log('AddComponent destory');
    // this.subscription.unsubscribe();
  }


}
