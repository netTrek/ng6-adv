import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNgTemplateOutletComponent } from './user-ng-template-outlet/user-ng-template-outlet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserNgTemplateOutletComponent],
  exports: [UserNgTemplateOutletComponent]
})
export class DynamicModule { }
