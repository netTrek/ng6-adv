import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ContentModule } from './content/content.module';
import { ViewModule } from './view/view.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { RoleDirective } from './dynamic/role.directive';
import { TempTargetDirective } from './dynamic/temp-target.directive';
import { StreamModule } from './stream/stream.module';
import { DetectionModule } from './detection/detection.module';
import { UsersModule } from './users/users.module';
import { UtilsModule } from './utils/utils.module';
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
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    // ContentModule
    // ViewModule
    // DynamicModule
    // StreamModule,
    // DetectionModule,
    UsersModule,
    HomeModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RoleDirective, TempTargetDirective]
})
export class AppModule { }
