import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { UserComponent } from '../user/user.component';
import { User } from '../user';
import { PlayService } from '../../play.service';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ], providers: [ UserService ]
} )
export class UserListComponent implements OnInit,
                                          AfterViewInit {

  myList: number[] = [ 1,
                       2,
                       3,
                       4,
                       5,
                       6
  ];

  userList: User[] = [];

  @ViewChild ( 'line' )
  line: ElementRef<HTMLHRElement>;

  @ViewChild ( AvatarComponent )
  avatar: AvatarComponent;

  @ViewChildren ( UserComponent )
  users: QueryList<UserComponent>;
  // selectedUser: User;

  constructor( private renderer: Renderer2, public $play: PlayService, public $user: UserService ) {
  }

  ngOnInit() {
    this.$user.users$.subscribe( next => this.userList = next );
    // this.$user.getUsers();
    // this.$user.getUsers()
  }

  ngAfterViewInit(): void {
    console.log ( this.avatar );
    // auch unter SSR ( Angular Universal )
    this.renderer.setStyle ( this.line.nativeElement, 'borderColor', 'blue' );
    // nicht möglich bei SSR ( Angular Universal )
    // this.line.nativeElement.style.borderColor = 'blue';
  }

  setSelectedUser( usr: User ) {
    if ( this.$user.selectedUser === usr ) {
      this.$user.selectedUser = undefined;
    } else {
      this.$user.selectedUser = usr;
    }
  }

  temp() {
    debugger;
  }

  addUser() {
    this.userList.push( {firstname: `user${this.userList.length + 1}`,
      lastname: 'added' } );
  }

  delSelected() {
    this.userList.splice( this.userList.indexOf( this.$user.selectedUser ), 1 );
    this.$user.selectedUser = undefined;
  }

  deleteUser( usr: User ) {
    this.userList.splice( this.userList.indexOf( usr ), 1 );
    if ( usr === this.$user.selectedUser ) {
      this.$user.selectedUser = undefined;
    }
  }

  updateToPlay() {
    this.$play.toPlay = 4556;
  }
}
