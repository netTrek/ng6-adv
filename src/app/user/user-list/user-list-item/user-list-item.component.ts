import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { UserAvatarComponent } from '../../user-avatar/user-avatar.component';

@Component({
  selector: 'dvz-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit, AfterContentInit {

  @ContentChild (UserAvatarComponent)  // erstes gefundene Elem.
  private avatar: UserAvatarComponent;

  @ContentChildren (UserAvatarComponent)
  private avatarList: QueryList<UserAvatarComponent>;

  constructor() {
    console.log ( this.avatar );
  }

  ngOnInit() {
  }

  ngAfterContentInit (): void {
    console.log ( this.avatar );
    console.log ( this.avatarList );
    console.log ( this.avatarList.toArray() );
  }

}
