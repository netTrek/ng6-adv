import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynTempComponent } from './dyn-temp/dyn-temp.component';

const routes: Routes = [
  {path: '', component: DynTempComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynTempRoutingModule { }
