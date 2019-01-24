import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { FormComponent } from './contact/form/form.component';
import { FormDeactivateGuard } from './contact/form/form-deactivate.guard';

const routes: Routes = [
  {path: '',
    component: ContactComponent,
    children: [
      {path: '', redirectTo: 'map', pathMatch: 'full'},
      {path: 'map', component: MapComponent},
      {path: 'form', component: FormComponent,
      canDeactivate: [FormDeactivateGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
