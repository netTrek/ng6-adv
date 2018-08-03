import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'pr-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  className = 'make-red';
  selectedIndex = -1;
  userList: User[] = [
    {
      'id': 1,
      'firstname': 'saban',
      'lastname': 'ünlü',
      'birthday': '1973-11-04'
    },
    {
      'id': 2,
      'firstname': 'peter',
      'lastname': 'müller',
      'birthday': '1973-11-04'
    },
    {
      'id': 3,
      'firstname': 'franz',
      'lastname': 'maier',
      'birthday': '1973-11-04'
    }
  ];
  selectedUsr: User;

  constructor() { }
  ngOnInit() {
  }

  selectNextUsr () {
    if ( ++ this.selectedIndex === 4 ) {
      this.selectedIndex = 0;
    }
    if ( this.selectedIndex % 2 === 0 ) {
      this.className = 'make-blue';
    } else {
      this.className = 'make-red';
    }
  }

  selectIndex ( ind: number, $event: MouseEvent ) {
    this.selectedIndex = ind;
    console.log ( $event );
  }

  setAsSelected ( user: User ) {
    this.selectedUsr = user;
    this.selectedIndex = this.userList.indexOf( this.selectedUsr );
  }
}
