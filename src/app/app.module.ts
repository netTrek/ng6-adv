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

registerLocaleData ( localeDe, 'de' );

export const USE_ME: InjectionToken<string> = new InjectionToken<string> ( 'useMe' );

export const MY_LIST: InjectionToken<string> = new InjectionToken<string> ( 'myList' );

export const MY_CLASS: InjectionToken<string> = new InjectionToken<string> ( 'myClass' );

export const MY_EX: InjectionToken<string> = new InjectionToken<string> ( 'myEx' );

export const MY_FACTORY: InjectionToken<string> = new InjectionToken<string> ( 'myFactory' );

export class MyClass {
  key = 'value';
}

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
    } )
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
