import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { CheckActivateGuard } from './check-activate.guard';

const routes: Routes = [{
  path: '',
  component: DashComponent,
  canActivate: [ CheckActivateGuard ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
