import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  selectedIndex    = - 1;
  userList: User[] = [
    {
      'id'       : 1,
      'firstname': 'saban',
      'lastname' : 'ünlü',
      'birthday' : '1973-11-04'
    },
    {
      'id'       : 2,
      'firstname': 'peter',
      'lastname' : 'müller',
      'birthday' : '1973-11-04'
    },
    {
      'id'       : 3,
      'firstname': 'franz',
      'lastname' : 'maier',
      'birthday' : '1973-11-04'
    }
  ];
  selectedUsr: User;

  constructor () {
  }

  selectNextUsr () {
    if ( ++ this.selectedIndex === 4 ) {
      this.selectedIndex = 0;
    }
  }

  setAsSelected ( user: User ) {
    this.selectedUsr   = user;
    this.selectedIndex = this.userList.indexOf ( this.selectedUsr );
  }

  selectIndex ( ind: number, $event: MouseEvent ) {
    this.selectedIndex = ind;
  }

  addUser ( user: User ) {
    this.userList.push ( user );
    this.selectedUsr   = user;
    this.selectedIndex = this.userList.length - 1;
  }

  delUsr ( user: User ) {
    this.userList.splice ( this.userList.indexOf ( user ), 1 );
    this.selectedUsr   = undefined;
    this.selectedIndex = - 1;
  }
}
