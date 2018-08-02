import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';

@Component ( {
  selector   : 'pr-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, AfterContentInit {

  @ContentChild ( UserAvatarComponent )
  avatar: UserAvatarComponent;

  @ContentChildren ( UserAvatarComponent )
  avatars: QueryList<UserAvatarComponent>;

  @ContentChild ( UserAvatarComponent, { read: ElementRef } )
  avatarElem: ElementRef<UserAvatarComponent>;

  constructor () {
  }

  ngOnInit () {
  }

  ngAfterContentInit (): void {

    console.log ( this.avatar, this.avatarElem );
    /*
    this.avatars.changes.subscribe ( next => {
      console.log ( 'sub', next );
    } );
    */
    this.avatars.toArray ()
        .forEach ( ( value, index ) => {
          value.saban = index;
        } );
  }

}
