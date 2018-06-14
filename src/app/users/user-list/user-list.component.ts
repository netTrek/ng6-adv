import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'post-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  constructor ( public $user: UserService ) {
  }

  ngOnInit () {
    // this.$user.getUserById ( 111 )
    //     .subscribe ();
  }

  ngOnDestroy (): void {
  }

  createNewUser () {
    this.$user.create ( <User>{
      firstname: '2323222',
      lastname : '2323222',
      birthday : '2222'
    } )
        .subscribe ();
  }

  deleteUser ( user: User ) {
    this.$user.deleteUsr ( user )
        .subscribe ();
  }

}
