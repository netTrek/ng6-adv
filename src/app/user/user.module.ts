import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserAvatarComponent } from './user/user-avatar/user-avatar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UserListHeaderComponent } from './user-list/user-list-header/user-list-header.component';
import { SAMPLE_MULTI_VALUE, SAMPLE_VALUE } from '../token/injectionToken';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { UserAddComponent } from './user-list/user-add/user-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, UserAvatarComponent, UserListComponent, UserListItemComponent, UserListHeaderComponent, UserEditComponent, UserAddComponent],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports: [UserComponent, UserListComponent, UserListItemComponent, UserListHeaderComponent],
  providers: [
    {provide: SAMPLE_VALUE, useValue: 'set SAMPLE_VALUE'},
    {provide: SAMPLE_MULTI_VALUE, useValue: 'SAMPLE_MULTI_VALUE in user', multi: true}
  ]
})
export class UserModule {
}
