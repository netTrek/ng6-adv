import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  Query,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import { UserAvatarComponent } from '../../user-avatar/user-avatar.component';

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

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    console.log ( this.avatar );
    console.log ( this.avatars.toArray() );
    // this.avatars.changes.subscribe( value => { console.log ( value );} );
  }

}
