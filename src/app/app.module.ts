import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from './utils/utils.module';
import { HomeModule } from './home/home.module';
import { DashModule } from './dash/dash.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    UtilsModule,
    HomeModule,
    DashModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
