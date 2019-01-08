import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [CountdownComponent, HoverDirective],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent, HoverDirective]
})
export class UtilsModule { }
