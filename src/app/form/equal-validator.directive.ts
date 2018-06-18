import { AfterViewInit, Directive, ExistingProvider, forwardRef, Input, StaticProvider } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export class EqualValidator {
  static isEqual ( compare: any ): ValidatorFn {
    return ( control: AbstractControl ): ValidationErrors | null => {
      if ( control.value === null || compare === null ) {
        return null;
      }
      return compare !== control.value ? { 'equal': { 'is': control.value, 'should': compare } } : null;
    };
  }
}

export const EQUAL_VALIDATOR: ExistingProvider = {
  provide    : NG_VALIDATORS,
  useExisting: forwardRef ( () => EqualValidatorDirective ),
  multi      : true
};

@Directive ( {
  selector : '[postEqualValidator][formControlName],[postEqualValidator][formControl],[postEqualValidator][ngModel]',
  providers: [ EQUAL_VALIDATOR ]
} )
export class EqualValidatorDirective implements Validator, AfterViewInit {

  get postEqualValidator (): any {
    return this._postEqualValidator;
  }

  @Input ()
  set postEqualValidator ( value: any ) {
    this._postEqualValidator = value;
    if ( this._onChange ) {
      this._onChange ();
    }
  }

  private _postEqualValidator: any;
  private _onChange: () => void;

  constructor () {
  }

  validate ( c: AbstractControl ): ValidationErrors | null {
    return this.postEqualValidator ? EqualValidator.isEqual ( this.postEqualValidator ) ( c ) : null;
  }

  registerOnValidatorChange ( fn: () => void ): void {
    this._onChange = fn;
  }

  ngAfterViewInit (): void {
    if ( this._onChange ) {
      this._onChange ();
    }
  }
}
