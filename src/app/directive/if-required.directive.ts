import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appIfRequired]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IfRequiredDirective),
      multi: true
    }
  ]
})
export class IfRequiredDirective implements Validator {

  // 如果说是数组？
  constructor(@Attribute('appIfRequired') public appIfRequired: string,
              @Attribute('reverse') public reverse: string) { }

  private get isReverse() {
    if (!this.reverse) return false;
    return this.reverse === 'true';
  }

  validate(c: AbstractControl): { [key: string]: any } {

    const self = c.value;

    const target = c.root.get(this.appIfRequired);

    // self --> target
    if (self === '' && this.reverse) {
      target.setErrors(null);
    }

    if (self !== '' && target.value === '' && this.reverse ) {
      target.setErrors({
          ifRequired: true
      });
    }

    // self <-- target
    if (self === '' &&  target.value !== ''  && !this.reverse ) {
      return {
        ifRequired: true
      };
    }

    if (self !== '' &&  target.value === ''  && !this.reverse ) {
      return null;
    }

  }

}
