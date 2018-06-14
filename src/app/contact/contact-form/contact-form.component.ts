import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, NgForm } from '@angular/forms';

@Component ( {
  selector   : 'post-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls  : [ './contact-form.component.scss' ]
} )
export class ContactFormComponent implements OnInit {

  initial = { name: '', credentials: { email: 'us@netTrek.de', password: '' } };

  constructor () {
  }

  ngOnInit () {
  }

  chg () {
    this.initial.credentials.email = 'info@netTrek.de';
  }

  submitForm ( myForm: AbstractControl ) {
    console.log ( myForm.value );
  }

  resetForm ( myForm: NgForm, event?: Event ) {
    event.stopPropagation ();
    event.preventDefault ();
    myForm.setValue( this.initial );
    /*
    myForm.controls.name.setValue ( this.initial.name );
    (myForm.controls.credentials as FormGroup).controls.email.setValue ( this.initial.credentials.email );
    (myForm.controls.credentials as FormGroup).controls.password.setValue ( this.initial.credentials.password );
    */
  }
}
