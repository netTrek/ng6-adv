import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'list',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'dash',
    loadChildren: './dash/dash.module#DashModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, {enableTracing: true, preloadingStrategy: PreloadAllModules}*/ )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
