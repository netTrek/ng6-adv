/**
 * File created by suenlue on 07.08.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class NoCacheInterceptor implements HttpInterceptor {
  // needed für IE 11
  intercept ( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    req = req.clone ( {
      setHeaders: {
        'Cache-Control': 'no-cache',
        Pragma         : 'no-cache',
        Expires        : 'no-cache',
        'Content-Type' : 'application/json',
        Accept         : 'application/json'
      }
    } );
    console.log ( req );
    return next.handle ( req );

  }
}
