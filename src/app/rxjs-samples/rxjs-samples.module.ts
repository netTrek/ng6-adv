import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsSampleComponent } from './rxjs-sample/rxjs-sample.component';

@NgModule({
  declarations: [RxjsSampleComponent],
  imports: [
    CommonModule
  ],
  exports: [RxjsSampleComponent]
})
export class RxjsSamplesModule { }
