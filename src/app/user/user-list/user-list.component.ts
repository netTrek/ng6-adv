import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { UserComponent } from '../user/user.component';
import { User } from '../user';

@Component({
  selector: 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit,
                                          AfterViewInit {

  userList: User[] = [
    {firstname: 'user1', lastname: 'hello'},
    {firstname: 'user2', lastname: 'world'}
    ];

  @ViewChild ( 'line' )
  line: ElementRef<HTMLHRElement>;

  @ViewChild ( AvatarComponent )
  avatar: AvatarComponent;

  @ViewChildren( UserComponent )
  users: QueryList<UserComponent>;
  selectedUser: User;

  constructor( private renderer: Renderer2 ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log ( this.avatar );
    // auch unter SSR ( Angular Universal )
    this.renderer.setStyle( this.line.nativeElement, 'borderColor', 'blue' );
    // nicht möglich bei SSR ( Angular Universal )
    // this.line.nativeElement.style.borderColor = 'blue';
  }

  setSelectedUser( usr: User ) {
    this.selectedUser = usr;
  }
}
