import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ContentModule } from './content/content.module';
import { ViewsModule } from './views/views.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { CustomEventsAndAttrModule } from './custom-events-and-attr/custom-events-and-attr.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    // ContentModule
    // ViewsModule
    // DynamicModule
    CustomEventsAndAttrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
