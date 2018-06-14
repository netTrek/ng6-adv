import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleDirective } from './dynamic/role.directive';
import { TempTargetDirective } from './dynamic/temp-target.directive';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    RoleDirective,
    TempTargetDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    // ContentModule
    // ViewModule
    // DynamicModule
    // StreamModule,
    // DetectionModule,
    // UsersModule,
    // HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RoleDirective, TempTargetDirective]
})
export class AppModule { }
