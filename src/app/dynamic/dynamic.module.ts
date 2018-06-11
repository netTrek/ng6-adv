import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNgTemplateOutletComponent } from './user-ng-template-outlet/user-ng-template-outlet.component';
import { UserNgComponentOutletComponent } from './user-ng-component-outlet/user-ng-component-outlet.component';
import { MyEntryComponent } from './my-entry/my-entry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserNgTemplateOutletComponent, UserNgComponentOutletComponent, MyEntryComponent],
  exports: [UserNgTemplateOutletComponent, UserNgComponentOutletComponent],
  entryComponents: [MyEntryComponent]
})
export class DynamicModule { }
