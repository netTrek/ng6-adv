import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ()
export class NoCacheService implements HttpInterceptor {

  constructor () {
  }

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
    return next.handle ( req );
  }

}
