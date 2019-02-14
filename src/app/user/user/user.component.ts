import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewEncapsulation } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges( changes: SimpleChanges ): void {
    if ( changes.hasOwnProperty( 'user' ) ) {
      const userVal: SimpleChange = changes.user;
      console.log ( 'user value', userVal.currentValue );
    }
  }

  setAsSelected() {
    this.selected.emit( this.user );
  }
}
