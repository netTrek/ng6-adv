import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UtilsModule,
    UsersRoutingModule
  ],
  declarations: [UserComponent, UserListComponent],
  exports: [UserComponent, UserListComponent]
})
export class UsersModule { }
