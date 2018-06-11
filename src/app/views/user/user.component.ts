import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { UserIconComponent } from './user-icon/user-icon.component';

@Component({
  selector: 'post-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit {

  @ViewChild ( UserIconComponent, {read: ElementRef} )
  userIcon: ElementRef;

  @ViewChildren ( UserIconComponent )
  userIcons: QueryList<UserIconComponent>;

  @ViewChild ( 'txt' )
  txt: ElementRef;

  constructor( private renderer: Renderer2 ) { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    console.log ( this.userIcon, this.txt, this.userIcons.toArray(), this.renderer );
    this.renderer.setStyle( this.userIcon.nativeElement, 'color', 'red' );
  }

}
