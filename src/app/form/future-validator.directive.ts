import { Directive, forwardRef, StaticProvider } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export class FutureValidator {
  static isFuture: ValidatorFn = ( control: AbstractControl ): ValidationErrors | null => {
    if ( control.value === null ) {
      return null;
    }
    const selected = new Date ( control.value );
    const now      = new Date ();
    const isFuture = selected > now;
    return ! isFuture ? { 'future': { 'now': now, 'selected': selected } } : null;
  }
}

export const FUTURE_VALIDATOR: StaticProvider = {
  provide    : NG_VALIDATORS,
  useExisting: forwardRef ( () => FutureValidatorDirective ),
  multi      : true
};

@Directive ( {
  // tslint:disable-next-line
  selector : '[postFutureValidator][formControlName][type="date"],[postFutureValidator][formControl][type="date"],[postFutureValidator][ngModel][type="date"]',
  providers: [ FUTURE_VALIDATOR ]
} )
export class FutureValidatorDirective implements Validator {

  constructor () {
  }

  validate ( c: AbstractControl ): ValidationErrors | null {
    return FutureValidator.isFuture ( c );
  }

}
