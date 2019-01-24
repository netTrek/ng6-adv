import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'dvz-user-list',
  templateUrl: './user-list.component.html',
  // template: `<strong>HEllO LIST</strong>`,
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  constructor ( public $user: UserService,
                @Inject( LOCALE_ID ) locale: string ) {
    console.log ( locale );
  }

  ngOnInit () {
  }

  createUser () {
    this.$user.addUser( {firstname: 'angular', lastname: '7.04'} );
  }
}
