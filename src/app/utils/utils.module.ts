import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { GridComponent } from './grid/grid.component';
import { DangerBtnDirective } from './danger-btn.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountdownComponent, GridComponent, DangerBtnDirective],
  exports: [CountdownComponent, GridComponent, DangerBtnDirective]
})
export class UtilsModule { }
