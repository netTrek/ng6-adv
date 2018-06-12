import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'post-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor ( public $user: UserService ) {
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

  ngOnInit() {
  }

}
