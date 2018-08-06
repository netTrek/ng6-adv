import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSamplesComponent } from './pipe-samples/pipe-samples.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { FillStatePipe } from './pipes/fill-state.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PipeSamplesComponent, ReversePipe, FillStatePipe],
  exports: [PipeSamplesComponent, ReversePipe, FillStatePipe]
})
export class SamplesModule { }
