import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseTempOutletComponent } from './use-temp-outlet/use-temp-outlet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UseTempOutletComponent],
  exports: [UseTempOutletComponent]
})
export class DynamicModule { }
