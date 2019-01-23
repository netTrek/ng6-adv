import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user';

@Component ( {
  selector   : 'dvz-user-list',
  templateUrl: './user-list.component.html',
  // template: `<strong>HEllO LIST</strong>`,
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  userList: User[] = [
    { fistname: 'saban', lastname: 'uenlue' },
    { fistname: 'peter', lastname: 'müller' },
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
}
