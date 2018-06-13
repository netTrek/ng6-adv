import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [ {path: '', component: FormsComponent} ] ),
    FormsModule
  ],
  declarations: [FormsComponent, TemplateDrivenComponent],
  exports: [FormsComponent, TemplateDrivenComponent]
})
export class FormModule { }
