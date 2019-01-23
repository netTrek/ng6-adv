import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'dvz-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input() user: User;
  @Output() selectUsr: EventEmitter<User> = new EventEmitter();

  @Input()
  @HostBinding('class.selected')
  isSelected = false;

  constructor( private renderer: Renderer2 ) {
  }

  ngOnInit() {
  }

  @HostListener ('click')
  private sendEvent () {
    this.selectUsr.emit( this.user );
  }

  // @HostListener ('window:resize', ['$event'] )
  // private resize ( event: Event ) {
  //   console.log( 'resize ', event);
  // }
}
