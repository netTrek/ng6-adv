import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UtilsModule } from '../utils/utils.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ResoleUserDetailService } from './resole-user-detail.service';
import { UserDetailActivateGuard } from './user-detail-activate.guard';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    HttpClientModule,
    RouterModule.forChild( [
      { path: '', component: UserListComponent},
      { path: 'add', component: UserInputComponent},
      { path: ':id',
        component: UserDetailComponent,
        data: { url: 'http://google.de'},
        resolve: {
          user: ResoleUserDetailService
        },
        canActivate: [ UserDetailActivateGuard ]
      }
     ]),
    FormsModule
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserAvatarComponent,
    UserListItemComponent,
    UserDetailComponent,
    UserInputComponent
  ],
  exports: [
    UserComponent,
    UserListComponent,
    UserAvatarComponent
  ]
})
export class UserModule { }
