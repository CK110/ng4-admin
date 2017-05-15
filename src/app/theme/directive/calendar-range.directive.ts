import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appCalendarRange]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting : forwardRef( () => CalendarRangeDirective),
      multi: true
    }
  ]
})
export class CalendarRangeDirective implements Validator {

  constructor(@Attribute('appCalendarRange') public appCalendarRange: any) { }

  validate(c: AbstractControl): ValidationErrors | any {
    const self = c.value;
    const target = c.root.get(JSON.parse(this.appCalendarRange)['target']);
    const start = JSON.parse(this.appCalendarRange)['start'];

    if (start && target && target.value !== '' && self > target.value) {
      target.setErrors({
        calendarRangeError: true
      });
      return {
        calendarRangeError: true
      };
    }

    if (!start && target && target.value !== '' && self < target.value) {
      target.setErrors({
        calendarRangeError: true
      });
      return {
        calendarRangeError: true
      };
    }

    if(start && target && target.value !== '' && self <= target.value ){
      target.setErrors(null);
    }

    if(!start && target && target.value !== '' && self >= target.value ){
      target.setErrors(null);
    }

    return null;
  }

}
