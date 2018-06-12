import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path      : '',
    pathMatch : 'full',
    redirectTo: 'home'
  },
  {
    path     : 'home',
    loadChildren: './home/home.module#HomeModule'
    // component: HomeComponent
  },
  {
    path        : 'dash',
    loadChildren: './dash/dash.module#DashModule'
  },
  {
    path     : 'list',
    loadChildren: './users/users.module#UsersModule'
    // component: UserListComponent
  },
  {
    path      : '**',
    redirectTo: 'home'
  }

];

@NgModule ( {
  imports: [ RouterModule.forRoot ( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
