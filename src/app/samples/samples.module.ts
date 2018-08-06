import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSamplesComponent } from './pipe-samples/pipe-samples.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { FillStatePipe } from './pipes/fill-state.pipe';
import { RxjsSamplesComponent } from './rxjs-samples/rxjs-samples.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PipeSamplesComponent, ReversePipe, FillStatePipe, RxjsSamplesComponent],
  exports: [PipeSamplesComponent, ReversePipe, FillStatePipe, RxjsSamplesComponent]
})
export class SamplesModule { }
