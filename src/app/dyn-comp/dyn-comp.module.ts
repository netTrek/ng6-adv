import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynCompRoutingModule } from './dyn-comp-routing.module';
import { DynViewComponent } from './dyn-view/dyn-view.component';
import { DynAComponent } from './dyn-a/dyn-a.component';
import { DynBComponent } from './dyn-b/dyn-b.component';
import { MatBadgeModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DynCompRoutingModule, MatIconModule, MatBadgeModule
  ],
  declarations: [DynViewComponent, DynAComponent, DynBComponent],
  entryComponents: [ DynAComponent, DynBComponent ]
})
export class DynCompModule { }
