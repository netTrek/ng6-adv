import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserAvatarComponent } from './user/user-avatar/user-avatar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UserListHeaderComponent } from './user-list/user-list-header/user-list-header.component';

@NgModule({
  declarations: [UserComponent, UserAvatarComponent, UserListComponent, UserListItemComponent, UserListHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [UserComponent, UserListComponent, UserListItemComponent, UserListHeaderComponent]
})
export class UserModule { }
