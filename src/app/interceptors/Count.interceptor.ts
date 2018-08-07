/**
 * File created by suenlue on 07.08.18.
 * Copyright (c) 2018 by netTrek GmbH & Co. KG
 */
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ReqCountService } from './req-count.service';

// export let numOfRunningRequests = 0;

@Injectable()
export class CountInterceptor implements HttpInterceptor {

  constructor ( private readonly $reqCount: ReqCountService ) {}

  // in/decrement globale numOfRunningRequests by state
  intercept ( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    this.$reqCount.increment ();
    // console.log ( 'running Requests (start new)', ++ numOfRunningRequests );
    return next.handle ( req )
               .pipe (
                 tap ( ( event: HttpEvent<any> ) => {
                   if ( event instanceof HttpResponse ) {
                     this.$reqCount.decrement ();
                     // console.log ( 'running Requests (end success)', -- numOfRunningRequests );
                   }
                 }, ( error: any ) => {
                   if ( error instanceof HttpErrorResponse ) {
                     this.$reqCount.decrement ();
                     // console.log ( 'running Requests (end err)', -- numOfRunningRequests );
                   }
                 } )
               );
  }
}

