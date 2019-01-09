import { Injectable } from '@angular/core';
import { User } from '../user';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserSelectionService {

  selectedUser: BehaviorSubject<User> =
    new BehaviorSubject( null );

  constructor() { }

  setSelectedUser ( $event: User ) {
    if ( this.selectedUser.getValue() === $event ) {
      this.selectedUser.next(undefined);
    } else {
      this.selectedUser.next( $event );
    }
  }
}
