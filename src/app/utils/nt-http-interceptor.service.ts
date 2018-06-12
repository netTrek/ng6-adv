import { forwardRef, Inject, Injectable, Injector, Type } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

let numOfRunningRequests = 0;

@Injectable ()
export class NtHttpInterceptorService implements HttpInterceptor {

  constructor ( ) {
  }

  intercept ( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    console.log ( 'running Requests (start new)', ++numOfRunningRequests );
    return next.handle ( req )
               .pipe(
                 tap( ( event: HttpEvent<any> ) => {
                   if ( event instanceof HttpResponse ) {
                      console.log ( 'running Requests (end success)', --numOfRunningRequests );
                   }
                 }, ( error: any ) => {
                   if ( error instanceof HttpErrorResponse ) {
                     console.log ( 'running Requests (end err)', --numOfRunningRequests );
                   }
                 })
               );
  }

}
