import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, of, range, Subscription } from 'rxjs';
import { filter, find, last, map, scan, take } from 'rxjs/operators';

@Component ( {
  selector   : 'pr-rxjs-samples',
  templateUrl: './rxjs-samples.component.html',
  styleUrls  : [ './rxjs-samples.component.scss' ]
} )
export class RxjsSamplesComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  constructor () {
    // this.initOfSample ();
    // this.initRangeSample();
    this.initIntervalSample();
  }
  ngOnInit () {
  }

  ngOnDestroy (): void {
    while ( this.subscriptions.length > 0 ) {
      this.subscriptions.pop().unsubscribe();
    }
  }
  private initIntervalSample () {
    const observable: Observable<number> = interval( 100 );
    this.subscripte( observable.pipe ( take( 5 ) ) );
  }

  private initRangeSample () {
    // alt nicht mehr verwenden: Observable.of
    const observable: Observable<number> = range( 2, 5 ); // 2, 3, 4, 5, 6
    const piped = observable.pipe(
      filter( x => x % 2 === 0 ), // 2, 4, 6
      map ( x => x * 10 ), // 20, 40, 60
      scan( (acc, value) => acc = acc + value ), // 20, 60, 120
      map ( x => x / 10 ), // 2, 6, 120
      // last() // 120
      // find( x => x === 40 ) // 40
    );
    // this.subscripte ( observable, 'range' );
    this.subscripte ( piped, 'piped range' );
  }
  private initOfSample () {
    // alt nicht mehr verwenden: Observable.of
    const observable: Observable<number> = of ( 1, 2, 3 );
    this.subscripte ( observable, 'of - sub 1' );
    this.subscripte ( observable, 'of - sub 2' );
  }
  private subscripte ( observable: Observable<number>, msg: string = '' ): Observable<any> {
    this.subscriptions.push (
      observable.subscribe (
        next => {
          console.log ( `${msg} next`, next );
        },
        error => {
          console.error ( `${msg} next`, error );
        },
        () => {
          console.log ( `${msg} ich habe fertig .... ` );
        }
      ) );
    return observable;
  }
}
