import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { User } from './user/user';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dash',
    loadChildren:
      './dash/dash.module#DashModule'
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/:id',
    component: UserComponent
  },
  { // IMMER IMMER IMMER als letztes
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { preloadingStrategy: PreloadAllModules }*/ )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
