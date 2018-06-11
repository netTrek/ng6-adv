import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushComponent } from './push/push.component';
import { AutoDetectComponent } from './auto-detect/auto-detect.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PushComponent, AutoDetectComponent],
  exports: [PushComponent, AutoDetectComponent]
})
export class DetectionModule { }
