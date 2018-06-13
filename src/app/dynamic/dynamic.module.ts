import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseTempOutletComponent } from './use-temp-outlet/use-temp-outlet.component';
import { GenViaTempDirComponent } from './gen-via-temp-dir/gen-via-temp-dir.component';
import { UseCompOutletComponent } from './use-comp-outlet/use-comp-outlet.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { GenDynComponent } from './gen-dyn/gen-dyn.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UseTempOutletComponent, GenViaTempDirComponent, UseCompOutletComponent, DynamicComponent, GenDynComponent],
  exports: [UseTempOutletComponent, GenViaTempDirComponent, UseCompOutletComponent, DynamicComponent, GenDynComponent],
  entryComponents: [DynamicComponent]
})
export class DynamicModule { }
