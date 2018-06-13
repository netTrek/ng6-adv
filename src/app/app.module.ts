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

@NgModule({
  declarations: [
    AppComponent,
    RoleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    // ContentModule
    // ViewModule
    DynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RoleDirective]
})
export class AppModule { }
