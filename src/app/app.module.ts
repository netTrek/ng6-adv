import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilsModule } from './utils/utils.module';
import { SamplesModule } from './samples/samples.module';
import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';
import { MyFrameWorkModule } from './my-frame-work/my-frame-work.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoCacheInterceptor } from './interceptors/NoCache.interceptor';
import { CountInterceptor } from './interceptors/Count.interceptor';
import { ReqCountService } from './interceptors/req-count.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MY_CLASS, MY_EX, MY_FACTORY, MY_LIST, USE_ME } from './token/InjectionTokens';
import { MyClass } from './token/MyClass';

registerLocaleData ( localeDe, 'de' );

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    SamplesModule,
    UtilsModule,
    MyFrameWorkModule.forRoot( {
      name: 'saban',
      fun: 'cool oder?'
    } ),
    BrowserAnimationsModule
  ],
  providers   : [
    ReqCountService,
    CountInterceptor,
    { provide: LOCALE_ID, useValue: 'de' },
    { provide: USE_ME, useValue: 'value 4 useMe' },
    { provide: MY_LIST, useValue: 'value from app', multi: true },
    { provide: MY_CLASS, useClass: MyClass },
    { provide: MY_EX, useExisting: USE_ME },
    {
      provide: MY_FACTORY, useFactory: ( useMe ) => {
        return {
          key: useMe
        };
      }, deps: [ USE_ME ]
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: NoCacheInterceptor,
      multi   : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useExisting: CountInterceptor,
      multi   : true
    }
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
