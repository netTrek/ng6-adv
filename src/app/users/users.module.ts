import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ResolveService } from './resolve.service';

@NgModule ( {
  imports     : [
    CommonModule,
    RouterModule.forChild ( [
      { path: '', component: UserListComponent },
      {
        path   : 'detail/:id', component: UserDetailComponent,
        resolve: { user: ResolveService }
      }

    ] )
  ],
  providers   : [ ResolveService ],
  declarations: [ UserListComponent,
                  UserComponent,
                  UserDetailComponent
  ]
} )
export class UsersModule {
}
