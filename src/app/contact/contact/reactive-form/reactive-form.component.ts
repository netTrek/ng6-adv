import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component ( {
  selector   : 'pl-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls  : [ './reactive-form.component.scss' ]
} )
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  // nameCtrl: FormControl;
  emailCtrl: FormControl;
  // passwordCtrl: FormControl;

  constructor ( private $formBuilder: FormBuilder ) {
  }

  ngOnInit () {

    this.myForm = this.$formBuilder.group ( {
      name       : [ 'testing',
                     Validators.required
      ],
      credentials: this.$formBuilder.group (
        {
          email   : [ 'saban@uenlue.de',
                      [ Validators.email,
                        Validators.required
                      ]
          ],
          password: [ 'test124',
                      [ Validators.minLength ( 3 ),
                        Validators.pattern ( '[a-zA-Z0-9]*' )
                      ]
          ]
        } )
    } );

    // this.nameCtrl     = this.myForm.get ( [ 'name' ] ) as FormControl;
    this.emailCtrl    = this.myForm.get ( [ 'credentials',
                                            'email'
    ] ) as FormControl;
    // this.passwordCtrl = this.myForm.get ( [ 'credentials',
    //                                         'password'
    // ] ) as FormControl;

  }

}
