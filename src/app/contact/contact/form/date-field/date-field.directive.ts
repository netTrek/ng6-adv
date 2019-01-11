import { AfterViewInit, Directive, ElementRef, forwardRef, OnDestroy, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateFieldComponent } from './date-field.component';
import { fromEvent, Subscription } from 'rxjs';

@Directive ( {
  // tslint:disable-next-line
  selector : 'pl-date-field',
  providers: [ {
    provide    : NG_VALUE_ACCESSOR,
    useExisting: forwardRef ( () => DateFieldDirective ),
    multi      : true
  }
  ]
} )
export class DateFieldDirective implements ControlValueAccessor, AfterViewInit, OnDestroy {

  private _onTouched: any;
  private _onChange: any;
  private input: HTMLInputElement;
  private subs: Subscription[] = [];

  constructor ( private renderer: Renderer2, private field: DateFieldComponent ) {

  }

  registerOnChange ( fn: any ): void {
    this._onChange = fn;
  }

  registerOnTouched ( fn: any ): void {
    this._onTouched = fn;
  }

  writeValue ( value: string ): void {
    if ( ! ! value && ! ! this.input ) {
      // this.input.value = value;
      this.renderer.setAttribute ( this.input, 'value', value );
    }
  }

  ngAfterViewInit (): void {
    this.input = this.field.inputField.nativeElement as HTMLInputElement;
    this.subs.push (
      fromEvent ( this.input, 'change' )
        .subscribe (
          _ => {
            this.writeValue ( this.input.value );
            if ( ! ! this._onChange ) {
              this._onChange ( this.input.value );
            }
          }
        ) );
    this.subs.push (
      fromEvent ( this.input, 'blur' )
        .subscribe (
          blur => {
            if ( ! ! this._onTouched ) {
              this._onTouched ();
            }
          }
        ) );
  }

  setDisabledState ( isDisabled: boolean ): void {
    if ( isDisabled ) {
      this.renderer.setAttribute ( this.input, 'disabled', 'disabled' );
    } else {
      this.renderer.removeAttribute ( this.input, 'disabled' );
    }
  }

  ngOnDestroy (): void {
    while ( this.subs.length > 0 ) {
      this.subs.pop().unsubscribe();
    }
  }
}
