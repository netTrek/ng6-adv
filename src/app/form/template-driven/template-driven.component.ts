import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component ( {
  selector   : 'post-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls  : [ './template-driven.component.scss' ]
} )
export class TemplateDrivenComponent implements OnInit {

  initVal = { name: 'Saban', credentials: { email: 'us@netTrek.de', password: 'test1234' } };

  constructor () {
  }

  ngOnInit () {
  }

  send ( myForm: NgForm ) {
    console.log ( myForm );
  }

  reset ( myForm: NgForm, event?: Event ) {
    event.stopPropagation ();
    event.preventDefault ();
    myForm.controls.name.setValue ( this.initVal.name );
    (myForm.controls.credentials as FormGroup).controls.email.setValue ( this.initVal.credentials.email );
    (myForm.controls.credentials as FormGroup).controls.password.setValue ( this.initVal.credentials.password );
  }

}
