import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dvz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FormComponent implements OnInit {

  constructor( private $user: UserService, private $router: Router ) { }

  ngOnInit() {
  }

  sendData ( value: any ) {
    console.log ( 'sending body', value );
    this.$user.addUser( {firstname: value.name, lastname: value.email })
      .then( user => {
        this.$router.navigate( [ '/user', user.id ] );
      });
  }
}
