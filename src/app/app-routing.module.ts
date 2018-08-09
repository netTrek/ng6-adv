import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountdownComponent } from './utils/countdown/countdown.component';
import { RxjsSamplesComponent } from './samples/rxjs-samples/rxjs-samples.component';
import { PipeSamplesComponent } from './samples/pipe-samples/pipe-samples.component';
import { PizzasComponent } from './samples/pizzas/pizzas.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'dynTemp',
    loadChildren: './dyn-temp/dyn-temp.module#DynTempModule'
  },
  {
    path: 'dynTemp',
    loadChildren: './dyn-temp/dyn-temp.module#DynTempModule'
  },
  {
    path: 'changeDetection',
    loadChildren: './change-detection/change-detection.module#ChangeDetectionModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'users',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'countdown',
    component: CountdownComponent
  },
  {
    path: 'rxjs',
    component: RxjsSamplesComponent
  },
  {
    path: 'pipe',
    component: PipeSamplesComponent
  },
  {
    path: 'di',
    component: PizzasComponent
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
