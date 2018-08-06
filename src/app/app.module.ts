import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UtilsModule } from './utils/utils.module';
import { SamplesModule } from './samples/samples.module';
import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';

registerLocaleData( localeDe, 'de' );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SamplesModule,
    UtilsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
