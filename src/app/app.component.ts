import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UserService } from './users/user.service';
import { User } from './users/user';

const version = 'v7';

@Component ( {
  selector   : 'post-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'post';

  constructor ( private swUpdate: SwUpdate, public $user: UserService ) {
    $user.getUserList().subscribe();
  }

  delete ( user: User ) {
    this.$user.delUser( user ).subscribe();
  }

  create () {
    this.$user.create( <User> {
      age: 111,
      firstname: 'f111',
      lastname: 'l111'
    }).subscribe();
  }

  forceErr () {
    this.$user.getUserById( 999 ).subscribe();
  }
}
