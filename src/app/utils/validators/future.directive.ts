import { Directive, ExistingProvider, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export class FuturValidator {
  static isFutur: ValidatorFn = ( control: AbstractControl ): ValidationErrors | null => {

    if ( control.value === null ) {
      return null;
    }

    const input    = new Date ( control.value );
    const now      = new Date ();
    const hasError = input < now;

    if ( hasError ) {
      const errorObj = {
        isFutur: {
          now,
          value: control.value
        }
      };
      return errorObj;
    }

    return null;

  }
}

export const FUTUR_VALIDATOR: ExistingProvider = {
  provide    : NG_VALIDATORS,
  useExisting: forwardRef ( () => FutureDirective ),
  multi      : true
};

@Directive ( {
  // tslint:disable-next-line
  selector : '[prFuture][formControlName][type="date"],[prFuture][formControl][type="date"],[prFuture][ngModel][type="date"]',
  providers: [ FUTUR_VALIDATOR ]
} )
export class FutureDirective implements Validator {

  constructor () {
  }

  validate ( c: AbstractControl ): ValidationErrors | null {
    return FuturValidator.isFutur( c );
  }

}
