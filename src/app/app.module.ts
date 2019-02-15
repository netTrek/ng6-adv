import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BindingsModule } from './bindings/bindings.module';
import { UtilsModule } from './utils/utils.module';
import { PipesModule } from './pipes/pipes.module';

import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { RxjsSamplesModule } from './rxjs-samples/rxjs-samples.module';
import { PlayService } from './play.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
registerLocaleData( localeDE );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    BindingsModule,
    UtilsModule,
    PipesModule,
    RxjsSamplesModule,
    HomeModule,
    ContactModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'}/*,
    PlayService*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
