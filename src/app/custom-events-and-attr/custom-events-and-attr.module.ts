import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserListComponent, UserComponent],
  exports: [UserListComponent]
})
export class CustomEventsAndAttrModule { }
