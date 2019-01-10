import { Component, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from '../../user';
import { UserSelectionService } from '../user-selection.service';
import { Subscription } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Component ( {
  selector   : 'pl-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : [ './user-list-item.component.scss' ]
} )
export class UserListItemComponent implements OnInit, OnDestroy {

  @Input ()
  user: User;

  @Output ()
  selectedUsr: EventEmitter<User> = new EventEmitter ();

  @HostBinding ( 'class.selected' )
  private isSelected: boolean;
  private sub: Subscription;

  constructor ( private $selection: UserSelectionService ) {
  }

  ngOnDestroy (): void {
    this.sub.unsubscribe();
  }

  ngOnInit () {
    // console.log ( this.user );
    this.sub = this.$selection.selectedUser
                         .subscribe ( next => {
                           this.isSelected = this.user === next;
                         } );
  }

  @HostListener ( 'click', [ '$event' ] )
  private selectUsr ( evt?: MouseEvent ) {
    // console.log ( evt );
    this.selectedUsr.emit ( this.user );
  }

  // @HostListener ( 'window:resize', ['$event'] )
  // private resize (evt?: MouseEvent ) {
  //   console.log ( evt );
  //   console.log ( 'resize' );
  // }
}
