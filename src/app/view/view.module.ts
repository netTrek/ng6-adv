import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIconComponent } from './user-icon/user-icon.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserIconComponent, UserComponent],
  exports: [UserIconComponent, UserComponent]
})
export class ViewModule { }
