import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [PipeSampleComponent, ReversePipe],
  imports: [
    CommonModule
  ],
  exports: [PipeSampleComponent, ReversePipe]
})
export class PipeSamplesModule { }
