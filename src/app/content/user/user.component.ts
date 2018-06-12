import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewContainerRef } from '@angular/core';
import { UserIconComponent } from '../user-icon/user-icon.component';

@Component({
  selector: 'post-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterContentInit {

  @ContentChild ( UserIconComponent )
  userIconComponent: UserIconComponent;

  @ContentChildren ( UserIconComponent )
  userIcons: QueryList<UserIconComponent>;

  @ContentChild ( UserIconComponent, {read: ElementRef} )
  userIconElemRef: ElementRef<UserIconComponent>;

  @ContentChild ( UserIconComponent, {read: ViewContainerRef} )
  userIconViewContRef: ViewContainerRef;

  // elementRef und ViewConteainerRef via DI
  // constructor( elemRef: ElementRef,
  //              containerRef: ViewContainerRef ) {
  //   console.log ( elemRef, containerRef );
  // }

  ngOnInit() {
  }

  ngAfterContentInit (): void {
    console.log (
      this.userIconComponent,
      this.userIconElemRef,
      this.userIconViewContRef,
      this.userIcons.toArray()
    );
    this.userIcons.changes.subscribe( n => console.log ( n ) );
  }

}
