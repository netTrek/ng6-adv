import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserGuard } from './users/user.guard';

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
    loadChildren: './users/users.module#UsersModule',
    canLoad: [UserGuard]
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
