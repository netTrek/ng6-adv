import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validator, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { debug } from 'util';

@Component ( {
  selector   : 'pr-user-input',
  templateUrl: './user-input.component.html',
  styleUrls  : [ './user-input.component.scss' ]
} )
export class UserInputComponent implements OnInit {

  payload = {
    firstname: {
      value: '', validators: { required: true }
    },
    lastname: {
      value: '', validators: { required: true, minLength: 3 }
    },
    email: {
      value: '', validators: { required: true, email: true }
    },
    birthday: {
      value: '', type: 'date'
    },
    password: {
      value: '', type: 'password', validators: { required: true, minLength: 10 }
    }
  };

  keys: {key: string, type: string}[] = [];

  myForm: FormGroup;

  constructor ( private $user: UserService, private $router: Router, private fb: FormBuilder ) {
  }

  getCtrlFor ( key: string ): AbstractControl {
    return this.myForm.get ( [ key ] );
  }

  ngOnInit () {

    const fbObj = {};
    for ( const payloadKey in this.payload ) {
      if ( payloadKey ) {
        const item          = this.payload[ payloadKey ];
        fbObj[ payloadKey ] = [ this.payload[ payloadKey ].value ];
        this.keys.push( { key: payloadKey, type: item.type || 'text' } );
        if ( item.hasOwnProperty ( 'validators' ) ) {
          const validators: ValidatorFn[] = [];
          const val                       = this.payload[ payloadKey ].validators;
          for ( const valKey in val ) {
            if ( valKey ) {
              switch ( valKey ) {
                case 'required':
                  if ( val[ valKey ].toString ()
                                    .toLowerCase ()
                                    .trim () === 'true' ) {
                    validators.push ( Validators.required );
                  }
                  break;
                case 'email':
                  if ( val[ valKey ].toString ()
                                    .toLowerCase ()
                                    .trim () === 'true' ) {
                    validators.push ( Validators.email );
                  }
                  break;
                case 'minLength':
                  if ( parseInt ( val[ valKey ].toString (), 10 ) > 0 ) {
                    validators.push ( Validators.minLength ( parseInt ( val[ valKey ].toString (), 10 ) ) );
                  }
                  break;
                case 'maxLength':
                  if ( parseInt ( val[ valKey ].toString (), 10 ) > 0 ) {
                    validators.push ( Validators.maxLength ( parseInt ( val[ valKey ].toString (), 10 ) ) );
                  }
                  break;
              }
            }

          }
          if ( validators.length > 0 ) {
            fbObj[ payloadKey ].push ( validators );
          }
        }
      }
    }

    this.myForm = this.fb.group ( fbObj );
    /*this.myForm = this.fb.group( {
      firstname: [ '', Validators.required ],
      lastname: [ '', [Validators.required, Validators.minLength(3), Validators.maxLength(10) ] ],
      birthday: [ '' ]
    });*/
  }

  addNewUser ( myForm: AbstractControl ) {
    this.$user.addUser ( myForm.value as User )
        .then (
          success => this.$router.navigate ( [ 'users',
                                               success.id
          ] )
        );
  }

  resetForm ( myForm: AbstractControl ) {
    myForm.reset ();
  }
}
