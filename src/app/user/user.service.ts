import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  users: User[] = [
    { firstname: 'frank 0', lastname: 'müller 0' },
    { firstname: 'frank 1', lastname: 'müller 1' },
    { firstname: 'frank 2', lastname: 'müller 2' },
    { firstname: 'frank 3', lastname: 'müller 3' }
  ];

  constructor () {
  }

  addNewUser () {
    const lng = this.users.length;
    this.users.push ( {
      firstname: `frank ${lng}`, lastname: `mueller ${lng}`
    } );
  }
}
