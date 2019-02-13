import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterContentInit {

  @ContentChild ( AvatarComponent )
  avatar: AvatarComponent;

  @ContentChildren( UserComponent )
  users: QueryList<UserComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log ( this.avatar );
  }

}
