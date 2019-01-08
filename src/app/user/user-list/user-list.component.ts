import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { UserListHeaderComponent } from './user-list-header/user-list-header.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@Component({
  selector: 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterContentInit {

  @ContentChild( UserListHeaderComponent )
  header: UserListHeaderComponent;

  @ContentChildren( UserListItemComponent )
  items: QueryList<UserListItemComponent>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit (): void {
    console.log ( this.header );
    console.log ( this.items );
    console.log ( this.items.toArray() );
  }

}
