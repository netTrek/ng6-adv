import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'dvz-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input() user: User;
  @Output() selectUsr: EventEmitter<User> = new EventEmitter();

  constructor( private renderer: Renderer2 ) {
  }

  ngOnInit() {
  }

  sendEvent () {
    this.selectUsr.emit( this.user );
  }
}
