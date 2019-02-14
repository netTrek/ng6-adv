import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSamplesComponent } from './pipe-samples/pipe-samples.component';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [PipeSamplesComponent, ReversePipe],
  imports: [
    CommonModule
  ],
  exports: [PipeSamplesComponent]
})
export class PipesModule { }
