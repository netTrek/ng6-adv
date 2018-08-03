import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  selectedIndex = 1;

  constructor() { }

  ngOnInit() {
  }

  selectNextUsr () {
    if ( ++ this.selectedIndex === 4 ) {
      this.selectedIndex = 0;
    }
  }
}
