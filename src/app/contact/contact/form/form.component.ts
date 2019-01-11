import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Component ( {
  selector   : 'pl-form',
  templateUrl: './form.component.html',
  styleUrls  : [ './form.component.scss' ]
} )
export class FormComponent implements OnInit, AfterViewInit {

  @ViewChild ( NgForm )
  form: NgForm;

  defaultMail = 'us@netTrek.de';

  myInput: HTMLInputElement;

  // @ViewChild ('myInput')
  // private myInputRef: ElementRef;

  constructor () {
  }

  ngOnInit () {
  }

  ngAfterViewInit (): void {
    // this.myInput = this.myInputRef.nativeElement;
    this.resetForm ();
  }

  sendForm ( value: any ) {
    console.warn ( 'sending data', value );
  }

  resetForm () {
    interval ( 1 )
      .pipe ( first () )
      .subscribe ( _ => {
        this.form.setValue (
          {
            name       : 'testing',
            datum: '2019-01-12',
            credentials:
              {
                email   : 'saban@uenlue.de',
                password: 'test124'
              }
          }
        );
      } );
  }

  logEvents ( $event ) {
    console.warn ( 'logEvent', $event );
  }
}
