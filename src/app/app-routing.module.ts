import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { User } from './user/user';
import { UserComponent } from './user/user/user.component';
import { ResolveGuard } from './user/resolve.guard';
import { ActivateGuard } from './user/activate.guard';
import { UserEditComponent } from './user/user-list/user-edit/user-edit.component';
import { UserAddComponent } from './user/user-list/user-add/user-add.component';

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
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'dash',
    canActivate: [
      ActivateGuard
    ],
    loadChildren:
      './dash/dash.module#DashModule'
  },
  {
    path: 'users',
    component: UserListComponent,
    children: [
      { path: 'edit', component: UserEditComponent },
      { path: 'add', component: UserAddComponent }
    ]
  },
  {
    path: 'users/:userid',
    component: UserComponent,
    data: {
      myValue: 'Hello World'
    },
    resolve: {
      userResolve: ResolveGuard
    }
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
