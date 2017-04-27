import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

/**
 * 没有错误返回true
 * 有错误返回false
 */
@Directive({
  selector: '[appCompareTo]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidateExpandDirective),
      multi: true
    }
  ]
})
export class ValidateExpandDirective implements Validator {

  constructor( @Attribute('appCompareTo') public appCompareTo: any) { }

  validate(c: AbstractControl): ValidationErrors | any {

    // 控件自身
    const self = c.value;

    // 要对比的值
    const target = c.root.get(this.appCompareTo);

    if (!self || !target ) {
      return null;
    }

    return null;
  }
}
