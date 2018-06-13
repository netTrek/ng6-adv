import { AfterViewInit, Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

export const CONTROL_VALUE_ACCESSOR = {
  name: 'formatterParserValueAccessor',
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormaterDirective),
  multi: true
};

@Directive ( {
  selector: 'input[postFormater]',
  providers: [CONTROL_VALUE_ACCESSOR]
} )
export class FormaterDirective implements ControlValueAccessor, AfterViewInit {

  private _onTouched: any | null = null;
  private _onChange: any | null  = null;
  private _input: HTMLInputElement;

  constructor ( private _elemRef: ElementRef, private _decimalPipe: DecimalPipe  ) {
    if ( this._elemRef.nativeElement.tagName.toLowerCase ()
             .trim () !== 'input' ) {
      throw new Error ( 'use directive for input only' );
    }
  }

  // Formatter: Model to View
  writeValue(rawValue: any): void {

    this.writeToView( rawValue );
    this.onChange( rawValue );

  }

  registerOnChange ( fn: any ): void {
    this._onChange = fn;
  }

  registerOnTouched ( fn: any ): void {
    this._onTouched = fn;
  }

  ngAfterViewInit (): void {
    this._input = this._elemRef.nativeElement as HTMLInputElement;
  }

  // write value with decimalPipe
  private writeToView ( value: number ) {
    if ( ! this._input ) {
      setTimeout( () => this.writeToView(value), 50 );
    } else if ( !isNaN(value)) {
      this._input.value = this._decimalPipe.transform( value );
    }
  }

  // Update View und Model
  @HostListener('input', ['$event'])
  private onControlInput($event: KeyboardEvent) {
    const rawValue: any = Number ( this._input.value.toString().replace(/[^0-9]/g, '') );
    this.onTouched();

    this.writeToView( rawValue );
    this.onChange( rawValue );

    // TODO Cursor Positionieren
  }

  // benötigt wenn man mit Form Controller arbeitet
  private onTouched () {
    if ( this._onTouched !== null ) {
      this._onTouched ();
    }
  }

  // benötigt wenn man mit Form Controller arbeitet und das Model aktialisiert werden soll
  private onChange ( val?: any ) {
    if ( this._onChange !== null ) {
      this._onChange ( val );
    }
  }

}
