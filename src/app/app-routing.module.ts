import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'user', component: UserListComponent},
  {path: 'user/:id',
    component: UserComponent},
  {path: 'dash', loadChildren: './dash/dash.module#DashModule'},
  {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
