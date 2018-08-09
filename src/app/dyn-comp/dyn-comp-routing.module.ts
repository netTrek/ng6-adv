import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynViewComponent } from './dyn-view/dyn-view.component';

const routes: Routes = [ { path: '', component: DynViewComponent } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynCompRoutingModule { }
