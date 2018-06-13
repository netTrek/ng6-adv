import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseTempOutletComponent } from './use-temp-outlet/use-temp-outlet.component';
import { GenViaTempDirComponent } from './gen-via-temp-dir/gen-via-temp-dir.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UseTempOutletComponent, GenViaTempDirComponent],
  exports: [UseTempOutletComponent, GenViaTempDirComponent]
})
export class DynamicModule { }
