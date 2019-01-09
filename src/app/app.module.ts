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
registerLocaleData( localeDE );

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    UtilsModule,
    PipeSamplesModule,
    RxjsSamplesModule
  ],
  providers   : [
    {provide: LOCALE_ID, useValue: 'de'}
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
