import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EqualValidatorDirective } from './equal-validator.directive';
import { FutureValidatorDirective } from './future-validator.directive';
import { FormaterDirective } from './formater.directive';
import { ModelDrivenComponent } from './model-driven/model-driven.component';

@NgModule ( {
  imports     : [
    CommonModule,
    RouterModule.forChild ( [ { path: '', component: FormsComponent } ] ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers   : [ DecimalPipe ],
  declarations: [ FormsComponent,
                  TemplateDrivenComponent,
                  EqualValidatorDirective,
                  FutureValidatorDirective,
                  FormaterDirective,
                  ModelDrivenComponent
  ],
  exports     : [ FormsComponent,
                  TemplateDrivenComponent,
                  EqualValidatorDirective,
                  FutureValidatorDirective,
                  FormaterDirective,
                  ModelDrivenComponent
  ]
} )
export class FormModule {
}
