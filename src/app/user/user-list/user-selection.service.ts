import { Injectable } from '@angular/core';
import { User } from '../user';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';

@Injectable()
export class UserSelectionService {

  selectedUser: BehaviorSubject<User> =
    new BehaviorSubject( null );

  constructor( private $user: UserService ) {
    this.observeList ();
  }

  setSelectedUser ( $event: User ) {
    if ( this.selectedUser.getValue() === $event ) {
      this.selectedUser.next(undefined);
    } else {
      this.selectedUser.next( $event );
    }
  }

  private observeList () {
    this.$user.users.subscribe(
      userList => {
        const selected = this.selectedUser.getValue();
        if ( !! selected ) {
          const selectedUsr = userList.find( value => value.id === selected.id );
          this.selectedUser.next( selectedUsr );
        }
      }
    );
  }
}
