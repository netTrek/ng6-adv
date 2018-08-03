import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountdownComponent, GridComponent],
  exports: [CountdownComponent, GridComponent]
})
export class UtilsModule { }
