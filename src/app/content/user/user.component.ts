import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { UserIconComponent } from '../user-icon/user-icon.component';

@Component ( {
  selector   : 'post-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, AfterContentInit {

  @ContentChild ( UserIconComponent )
  userIcon: UserIconComponent;

  @ContentChild ( UserIconComponent, {read: ElementRef} )
  userIconElemRef: ElementRef;

  @ContentChild ( UserIconComponent, {read: ViewContainerRef} )
  userIconViewContainerRef: ViewContainerRef;

  constructor () {
  }

  ngOnInit () {
  }

  ngAfterContentInit (): void {
    console.log ( this.userIcon );
    console.log ( this.userIconElemRef );
    console.log ( this.userIconViewContainerRef );
  }

}
