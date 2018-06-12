import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { UserIconComponent } from '../user-icon/user-icon.component';

@Component({
  selector: 'post-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,
AfterViewInit {

  @ViewChild( UserIconComponent )
  userIcon: UserIconComponent;

  @ViewChildren( UserIconComponent )
  userIcons: QueryList<UserIconComponent>;

  @ViewChild( 'txt' )
  txtElemRef: ElementRef<HTMLSpanElement>;

  constructor( private renderer: Renderer2 ) { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    console.log (
      this.userIcon,
      this.userIcons.toArray(),
      this.txtElemRef
    );

    // nie getElement .....
    // nicht so gut für universal
    // this.txtElemRef.nativeElement.style.color = 'red';

    this.renderer.setStyle(
      this.txtElemRef.nativeElement,
      'color',
      'red'
    );

  }

}
