import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UtilsModule } from './utils/utils.module';
import { PipeSamplesModule } from './pipe-samples/pipe-samples.module';

import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import { RxjsSamplesModule } from './rxjs-samples/rxjs-samples.module';
import { ServiceSamplesModule } from './service-samples/service-samples.module';
import { SAMPLE_CLASS, SAMPLE_EXISTING, SAMPLE_FACTORY, SAMPLE_MULTI_VALUE, SAMPLE_VALUE } from './token/injectionToken';
import { ProleitModule } from './proleit/proleit.module';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData( localeDE );

export class MyInjectedClass {
  value = 'wert';
}

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    UtilsModule,
    PipeSamplesModule,
    RxjsSamplesModule,
    ServiceSamplesModule,
    ProleitModule.forRoot( {debug: !environment.production })
  ],
  providers   : [
    {provide: LOCALE_ID, useValue: 'de'},
    {provide: SAMPLE_VALUE, useValue: 'override SAMPLE_VALUE'},
    {provide: SAMPLE_MULTI_VALUE, useValue: 'SAMPLE_MULTI_VALUE in app', multi: true},
    {provide: SAMPLE_CLASS, useClass: MyInjectedClass},
    {provide: SAMPLE_EXISTING, useExisting: SAMPLE_VALUE},
    {provide: SAMPLE_FACTORY, useFactory: ( sampleVal: string ) => {
      return `${sampleVal} factory export`;
      }, deps: [SAMPLE_VALUE] }
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
