import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserIconComponent } from './user/user-icon/user-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserIconComponent],
  exports: [UserComponent]
})
export class ViewsModule { }
