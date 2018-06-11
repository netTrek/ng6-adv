import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserIconComponent } from './user-icon/user-icon.component';

@Component({
  selector: 'post-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit {

  @ViewChild ( UserIconComponent )
  userIcon: UserIconComponent;

  @ViewChild ( 'txt' )
  txt: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    console.log ( this.userIcon, this.txt );
  }

}
