import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { UserListHeaderComponent } from './user-list-header/user-list-header.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@Component({
  selector: 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  selectedIndex = -1;
  test = 123;

  @ViewChild( 'line' )
  line: ElementRef;

  @ViewChild( UserListHeaderComponent )
  header: UserListHeaderComponent;

  @ViewChildren( UserListItemComponent )
  items: QueryList<UserListItemComponent>;

  constructor( private renderer: Renderer2 ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    console.log ( this.header );
    console.log ( this.items );
    console.log ( this.items.toArray() );
    console.log ( this.line );
    console.log ( this.line.nativeElement );

    // this.line.nativeElement.style.height = '3px';  // nur ohne universal - platform-server
    // this.line.nativeElement.style.backgroundColor = 'red';  // nur ohne universal - platform-server
    // this.line.nativeElement.style.borderColor = 'red'; // nur ohne universal - platform-server
    this.renderer.setStyle( this.line.nativeElement , 'borderColor', 'red');
  }

  setSelectedIndex ( index: number, test?: number|MouseEvent ) {
    this.selectedIndex = index;
    console.log ( test );
  }
}
