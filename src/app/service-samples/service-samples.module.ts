import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceSampleComponent } from './service-sample/service-sample.component';
import { MyStorageService } from './my-storage.service';

@NgModule({
  declarations: [ServiceSampleComponent],
  imports: [
    CommonModule
  ],
  exports: [ServiceSampleComponent],
  providers: [MyStorageService]
})
export class ServiceSamplesModule { }
