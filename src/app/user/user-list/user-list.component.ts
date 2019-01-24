import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component ( {
  selector   : 'dvz-user-list',
  templateUrl: './user-list.component.html',
  // template: `<strong>HEllO LIST</strong>`,
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  userList: User[] = [
    { firstname: 'saban', lastname: 'uenlue' },
    { firstname: 'peter', lastname: 'müller' }
  ];
  selectedUser: User;

  constructor () {
  }

  ngOnInit () {
  }

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
