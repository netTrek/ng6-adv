import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();


  const noop = () => {
  };
  console    = {
    ...window.console,
    log   : noop,
    /* error: noop, */
    table : noop,
    warn  : noop,
    debug : noop,
    assert: noop,
    clear : noop,
    dir   : noop,
    group : noop,
    info  : noop,
    trace: noop
  };


}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
