import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynTempRoutingModule } from './dyn-temp-routing.module';
import { DynTempComponent } from './dyn-temp/dyn-temp.component';
import { RoleDirective } from './role.directive';

@NgModule({
  imports: [
    CommonModule,
    DynTempRoutingModule
  ],
  declarations: [DynTempComponent, RoleDirective]
})
export class DynTempModule { }
