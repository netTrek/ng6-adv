import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  className = 'make-red';
  selectedIndex = 1;
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

  selectIndex ( ind: number ) {
    this.selectedIndex = ind;
  }
}
