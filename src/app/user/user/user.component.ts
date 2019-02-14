import {
  Component,
  EventEmitter, HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { User } from '../user';

// ng g c user/user --export --skip-test

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  // template: '<h1>userinline</h1>',
  styleUrls: ['./user.component.scss']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class UserComponent implements OnInit, OnChanges {

  @Input()
  user: User;

  @Output()
  selected: EventEmitter<User> = new EventEmitter();

  @Output()
  del: EventEmitter<User> = new EventEmitter();

  @Input()
  @HostBinding ( 'class.selected' )
  isSelected = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges( changes: SimpleChanges ): void {
    if ( changes.hasOwnProperty( 'user' ) ) {
      const userVal: SimpleChange = changes.user;
      console.log ( 'user value', userVal.currentValue );
    }
    if ( changes.hasOwnProperty( 'isSelected' ) ) {
      if ( changes.isSelected.currentValue  ) { // ist currentValue === true
        console.log ( 'ich bin selektiert', this.user );
      } else if ( changes.isSelected.previousValue === true  ) {
        console.log ( 'ich bin deselektiert', this.user );
      }
    }
  }

  @HostListener ('click')
  private setAsSelected() {
    // console.log ( 'select' );
    this.selected.emit( this.user );
  }
  delUsr( event: MouseEvent ) {
    // console.log ( 'delete' );
    event.stopImmediatePropagation();
    this.del.emit( this.user );
  }
}
