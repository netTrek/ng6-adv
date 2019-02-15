import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserGuard } from './user/user.guard';
import { ContactComponent } from './contact/contact/contact.component';
import { MapComponent } from './contact/contact/map/map.component';
import { FormComponent } from './contact/contact/form/form.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home', component: HomeComponent },
  {path: 'contact', component: ContactComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'map' },
      {path: 'map', component: MapComponent },
      {path: 'form', component: FormComponent }
    ]
  },
  {path: 'user', component: UserListComponent },
  {path: 'user/:id', component: UserDetailComponent,
    canActivate: [ UserGuard ]
  },
  {path: 'dash', loadChildren: './dash/dash.module#DashModule' }, // ...../dash
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
