import {
  AfterViewChecked,
  AfterViewInit,
  Component, EventEmitter, Input,
  OnInit, Output,
  Query,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import { UserAvatarComponent } from '../../user-avatar/user-avatar.component';
import { User } from '../../user';

@Component({
  selector: 'pr-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit, AfterViewInit {



  @ViewChild ( UserAvatarComponent )
  avatar: UserAvatarComponent;

  @ViewChildren ( UserAvatarComponent )
  avatars: QueryList<UserAvatarComponent>;

  @Input()
  user: User;

  @Output()
  select: EventEmitter<User> = new EventEmitter<User>();
  // select: EventEmitter<void> = new EventEmitter();  // falls keine Daten gesendet werden müssen

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    console.log ( this.avatar );
    console.log ( this.avatars.toArray() );
    // this.avatars.changes.subscribe( value => { console.log ( value );} );
  }

  setAsSelected () {
    this.select.emit ( this.user );
    // this.select.emit(); // falls keine Daten gesendet werden müssen
  }
}
