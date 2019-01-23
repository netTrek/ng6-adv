import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dvz-user-list',
  templateUrl: './user-list.component.html',
  // template: `<strong>HEllO LIST</strong>`,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  selectedIndex = -1;

  constructor() { }

  ngOnInit() {
  }

  setSelectedIndex ( ind: number ) {
    if ( ind === this.selectedIndex ) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = ind;
    }
  }
}
