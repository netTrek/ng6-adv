import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Saban, UserAvatarComponent } from '../../user-avatar/user-avatar.component';

@Component({
  selector: 'dvz-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit, AfterViewInit {

  @ViewChild (UserAvatarComponent)
  private avatar: UserAvatarComponent;

  @ViewChild (UserAvatarComponent, {read: Saban})
  private saban: Saban;

  @ViewChild ('line')
  private line: ElementRef<HTMLHRElement>;

  constructor( private renderer: Renderer2 ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    console.log ( this.avatar, this.saban );
    // this.line.nativeElement.style.borderColor = 'red';
    this.renderer.setStyle( this.line.nativeElement,
      'borderColor', 'red' );
  }


}
