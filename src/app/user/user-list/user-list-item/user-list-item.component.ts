import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'pl-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  selectedUsr: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log ( this.user );
  }

  selectUsr () {
    this.selectedUsr.emit( this.user );
  }
}
