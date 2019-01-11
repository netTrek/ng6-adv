import { Directive } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[plFormDir]'
})
export class FormDirDirective {

  constructor( model: NgModel ) {
    console.warn ( 'model', model );

    model.update.subscribe( _ =>
    console.warn ('update', _ ));
  }



}
