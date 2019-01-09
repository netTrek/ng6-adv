import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable()
export class UserSelectionService {

  selectedUser: User;

  constructor() { }


  setSelectedUser ( $event: User ) {
    if ( this.selectedUser === $event ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = $event;
    }
  }
}
