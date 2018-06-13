import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseTempOutletComponent } from './use-temp-outlet/use-temp-outlet.component';
import { GenViaTempDirComponent } from './gen-via-temp-dir/gen-via-temp-dir.component';
import { UseCompOutletComponent } from './use-comp-outlet/use-comp-outlet.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UseTempOutletComponent, GenViaTempDirComponent, UseCompOutletComponent, DynamicComponent],
  exports: [UseTempOutletComponent, GenViaTempDirComponent, UseCompOutletComponent, DynamicComponent],
  entryComponents: [DynamicComponent]
})
export class DynamicModule { }
