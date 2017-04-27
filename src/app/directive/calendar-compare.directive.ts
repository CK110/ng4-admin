import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appCalendarCompareSmallTo]',
  providers: [
    { provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CalendarCompareSmallDirective),
      multi: true
    }
  ]
})
export class CalendarCompareSmallDirective implements Validator {


  constructor(@Attribute('appCalendarCompareSmallTo') public smallTo: string) { }

  validate(c: AbstractControl): { [key: string]: any}  {

    const start = c.value;
    const end = c.root.get(this.smallTo);

    if ( start === '' && end.value === '') {
      return null;
    }

    if (end.value !== '' && start >= end.value) {
      return {
        noSmallTo: true
      };
    }

    return null;
  }

}


@Directive({
  selector: '[appCalendarCompareBigTo]',
  providers: [
    { provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CalendarCompareBigDirective),
      multi: true
    }
  ]
})
export class CalendarCompareBigDirective implements Validator {

  constructor(@Attribute('appCalendarCompareBigTo') public bigTo: string) { }

  validate(c: AbstractControl): { [key: string]: any } {

    const start = c.root.get(this.bigTo);
    const end = c.value;

    if (end && start !== end.value) {
      return {
        noBigTo: true
      };
    }

    return null;
  }

}

