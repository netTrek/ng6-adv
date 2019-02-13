import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [UserComponent, UserListComponent, AvatarComponent],
  imports: [
    CommonModule
  ],
  exports: [UserComponent, UserListComponent, AvatarComponent]
})
export class UserModule { }
