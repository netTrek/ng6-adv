import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input()
  users: string[];

  selectedUsr: any;

  constructor() { }

  ngOnInit() {
  }

  onSelect ( usrName: string ) {
    this.selectedUsr = usrName;
  }

}
