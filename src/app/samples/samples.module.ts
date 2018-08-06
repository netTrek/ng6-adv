import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSamplesComponent } from './pipe-samples/pipe-samples.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PipeSamplesComponent],
  exports: [PipeSamplesComponent]
})
export class SamplesModule { }
