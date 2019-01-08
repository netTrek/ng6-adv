import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
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


  @Input()
  @HostBinding ('class.selected')
  isSelected: boolean;

  constructor() { }

  ngOnInit() {
    console.log ( this.user );
  }

  @HostListener ('click', ['$event'])
  private selectUsr ( evt?: MouseEvent ) {
    console.log ( evt );
    this.selectedUsr.emit( this.user );
  }

  // @HostListener ( 'window:resize', ['$event'] )
  // private resize (evt?: MouseEvent ) {
  //   console.log ( evt );
  //   console.log ( 'resize' );
  // }
}
