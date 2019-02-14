import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UtilsModule } from '../utils/utils.module';
// ng g m user --module app
@NgModule({
  declarations: [UserComponent, UserListComponent, AvatarComponent],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [UserComponent, UserListComponent, AvatarComponent]
})
export class UserModule { }

