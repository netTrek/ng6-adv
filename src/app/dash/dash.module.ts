import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash/dash.component';

@NgModule({
  imports: [
    CommonModule,
    DashRoutingModule
  ],
  declarations: [DashComponent]
})
export class DashModule { }
