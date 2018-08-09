import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validator, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Payload } from './payload';
import { PayloadCtrls } from './payload-ctrls';
import { FuturValidator } from '../../utils/validators/future.directive';

@Component ( {
  selector   : 'pr-user-input',
  templateUrl: './user-input.component.html',
  styleUrls  : [ './user-input.component.scss' ]
} )
export class UserInputComponent implements OnInit {

  payloadCtrls: PayloadCtrls[] = [];

  myForm: FormGroup;

  private readonly payload: Payload = {
    firstname: {
      value: 'test', validators: { required: true }
    },
    lastname: {
      validators: { required: true, minLength: 3 }
    },
    email: {
      validators: { required: true, email: true }
    },
    birthday: {
      type: 'date', validators: { isFutur: true }
    },
    password: {
      type: 'password', validators: { required: true, minLength: 10 }
    }
  };

  constructor ( private $user: UserService, private $router: Router, private fb: FormBuilder ) {
  }

  ngOnInit () {

    const fbObj = {};
    for ( const payloadKey in this.payload ) {
      if ( payloadKey ) {
        const item          = this.payload[ payloadKey ];
        fbObj[ payloadKey ] = [ this.payload[ payloadKey ].value || undefined ];
        this.payloadCtrls.push(
          { key: payloadKey, type: item.type || 'text', ctrl: null } );
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
                case 'isFutur':
                  if ( val[ valKey ].toString ()
                                    .toLowerCase ()
                                    .trim () === 'true' ) {
                    validators.push ( FuturValidator.isFutur );
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

    this.payloadCtrls.forEach(( value, index, array) => {
      value.ctrl = this.myForm.get ( [ value.key ] );
    });
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
