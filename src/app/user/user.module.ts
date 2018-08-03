import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserAvatarComponent,
    UserListItemComponent
  ],
  exports: [
    UserComponent,
    UserListComponent,
    UserAvatarComponent
  ]
})
export class UserModule { }
