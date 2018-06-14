import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [UserComponent, UserListComponent],
  exports: [UserComponent, UserListComponent]
})
export class UsersModule { }
