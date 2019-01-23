import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowser } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

console.log ( environment.endpoint );

// platformBrowser().bootstrapModule(AppModule, [{ defaultEncapsulation: ViewEncapsulation.ShadowDom}] )
platformBrowserDynamic().bootstrapModule(AppModule, [{ defaultEncapsulation: ViewEncapsulation.ShadowDom}] )
  .catch(err => console.error(err));
