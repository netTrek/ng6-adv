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
import { User } from '../user';
import { UserService } from '../user.service';
import { UserSelectionService } from './user-selection.service';

@Component ( {
  selector   : 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ],
  providers: [ UserSelectionService ]
} )
export class UserListComponent implements OnInit {

  constructor ( public $user: UserService, public $userSelection: UserSelectionService ) {
  }

  ngOnInit () {
  }



}
