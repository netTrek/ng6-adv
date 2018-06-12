import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoCacheInterceptorService } from './no-cache-interceptor.service';
import { NtHttpInterceptorService } from './nt-http-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers   : [
                  {
                    provide : HTTP_INTERCEPTORS,
                    useClass: NoCacheInterceptorService,
                    multi   : true
                  },
                  {
                    provide : HTTP_INTERCEPTORS,
                    useClass: NtHttpInterceptorService,
                    multi   : true
                  }
  ],
  declarations: []
})
export class UtilsModule { }
