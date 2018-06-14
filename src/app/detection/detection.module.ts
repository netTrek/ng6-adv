import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushComponent } from './push/push.component';
import { AutoDetectComponent } from './auto-detect/auto-detect.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { Child3Component } from './parent/child3/child3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PushComponent, AutoDetectComponent, ParentComponent, Child1Component, Child2Component, Child3Component],
  exports: [PushComponent, AutoDetectComponent, ParentComponent]
})
export class DetectionModule { }
