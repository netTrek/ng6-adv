import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynTempRoutingModule } from './dyn-temp-routing.module';
import { DynTempComponent } from './dyn-temp/dyn-temp.component';

@NgModule({
  imports: [
    CommonModule,
    DynTempRoutingModule
  ],
  declarations: [DynTempComponent]
})
export class DynTempModule { }
