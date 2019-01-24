import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
export class NoCachInterceptorService implements HttpInterceptor {

  constructor ( ) {
  }

  intercept ( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    const headers = {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    req = req.clone ( {
      setHeaders: headers
    } );
    return next.handle ( req );
  }

}
