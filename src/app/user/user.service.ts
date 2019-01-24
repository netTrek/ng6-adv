import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [
    { firstname: 'saban', lastname: 'uenlue' },
    { firstname: 'peter', lastname: 'müller' }
  ];
  selectedUser: User;
  constructor() { }

  setSelectedUser ( user: User ) {
    if ( user === this.selectedUser ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  addNewUser () {
    const rnd = Math.floor ( Math.random () * 1000 );
    this.userList.push (
      { firstname: 'Hans' + rnd, lastname: 'Mustermann' + rnd }
    );
  }

  removeSelectedUser () {
    this.userList.splice ( this.userList.indexOf ( this.selectedUser ), 1 );
    this.selectedUser = undefined;
  }
}
