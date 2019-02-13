import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  @ViewChild ( AvatarComponent )
  avatar: AvatarComponent;

  @ViewChildren( UserComponent )
  users: QueryList<UserComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log ( this.avatar );
  }

}
