import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { PushComponent } from './change-detection/push/push.component';
import { DefaultComponent } from './change-detection/default/default.component';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule
  ],
  declarations: [ChangeDetectionComponent, PushComponent, DefaultComponent]
})
export class ChangeDetectionModule { }
