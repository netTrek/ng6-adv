import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [ {
      path: '', component: UserListComponent
    }])
  ],
  declarations: [UserListComponent, UserComponent]
})
export class UsersModule { }
