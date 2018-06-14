import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UtilsModule } from '../utils/utils.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UtilsModule,
    UsersRoutingModule
  ],
  declarations: [UserComponent, UserListComponent, UserDetailComponent]
})
export class UsersModule { }
