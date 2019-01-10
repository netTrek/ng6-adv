import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { FormComponent } from './contact/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
      { path: '', pathMatch: 'full',
      redirectTo: 'form'
      },
      { path: 'form', component: FormComponent},
      { path: 'map', component: MapComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
