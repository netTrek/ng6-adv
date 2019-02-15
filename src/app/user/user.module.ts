import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UtilsModule } from '../utils/utils.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
// ng g m user --module app
@NgModule({
  declarations: [UserComponent, UserListComponent, AvatarComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule
  ],
  exports: [UserComponent, UserListComponent, AvatarComponent, UserDetailComponent]
})
export class UserModule { }

