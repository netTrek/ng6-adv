import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { GridComponent } from './grid/grid.component';
import { DangerBtnDirective } from './danger-btn.directive';
import { RouterModule } from '@angular/router';
import { FutureDirective } from './validators/future.directive';
import { FormaterDirective } from './directives/formater.directive';
import { GridDirective } from './grid/grid.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CountdownComponent, GridComponent, DangerBtnDirective, FutureDirective, FormaterDirective, GridDirective],
  exports: [CountdownComponent, GridComponent, DangerBtnDirective, FutureDirective, FormaterDirective, GridDirective]
})
export class UtilsModule { }
