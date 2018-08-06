import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable, of, range, Subject, Subscription } from 'rxjs';
import { debounceTime, filter, find, first, last, map, scan, take } from 'rxjs/operators';

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
    // this.initIntervalSample();
    // this.initNewSample ();
    // this.initFromEventManSample ();
    // this.initFromEventSample ();
    // this.initSubjectSample ();
    this.initBehaviourSubjectSample ();
  }

  ngOnInit () {
  }

  ngOnDestroy (): void {
    while ( this.subscriptions.length > 0 ) {
      this.subscriptions.pop ()
          .unsubscribe ();
    }
  }

  private initBehaviourSubjectSample  () {
    const subject: BehaviorSubject<number> = new BehaviorSubject<number> ( 0 );
    this.subscribe ( subject, '0. sub' );
    subject.next ( 1 );
    subject.next ( 2 );
    this.subscribe ( subject, '1. sub' );
    subject.next ( 3 );
    subject.next ( 4 );
    this.subscribe ( subject, '2. sub' );
    subject.next ( 5 );
    subject.next ( 6 );
    this.subscribe ( subject, '3 sub' );
    subject.next ( 7 );
    subject.next ( 8 );
    this.subscribe ( subject, '4. sub' );
    subject.next ( 9 );
    subject.next ( 10 );
  }

  private initSubjectSample () {
    const subject: Subject<number> = new Subject<number> ();
    subject.next ( 1 );
    subject.next ( 2 );
    this.subscribe ( subject, '1. sub' );
    subject.next ( 3 );
    subject.next ( 4 );
    this.subscribe ( subject, '2. sub' );
    subject.next ( 5 );
    subject.next ( 6 );
    this.subscribe ( subject, '3 sub' );
    subject.next ( 7 );
    subject.next ( 8 );
    this.subscribe ( subject, '4. sub' );
    subject.next ( 9 );
    subject.next ( 10 );
  }

  private initFromEventSample () {
    const observable: Observable<MouseEvent>
                = fromEvent<MouseEvent> ( document, 'mousemove' );
    const piped = observable.pipe (
      map ( mouseEvent => mouseEvent.clientX ),
      filter ( x => x > 100 ),
      debounceTime ( 100 )
    );
    this.subscribe ( piped/*.pipe( take (2))*/, 'mouseevent' );
  }

  private initFromEventManSample () {
    const observable: Observable<MouseEvent>
            = new Observable<MouseEvent> ( observer => {

      const handler = ( evt ) => {
        observer.next ( evt );
      };
      const dispose = () => {
        document.removeEventListener ( 'mousemove', handler );
      };
      document.addEventListener ( 'mousemove', handler );

      return {
        unsubscribe () {
          dispose ();
        }
      };
    } );
    this.subscribe ( observable.pipe ( take ( 2 ) ), 'mouseevent' );
  }

  private initNewSample () {
    const observable: Observable<number> = new Observable<number> ( observer => {
      let value     = 0;
      let intervalID;
      const dispose = () => {
        if ( ! ! intervalID ) {
          window.clearInterval ( intervalID );
        }
      };

      intervalID = window.setInterval ( () => {
        observer.next ( value ++ );
        // observer.error( 'errMsg' ); // zum abbrechen mit Fehlermeldung
        // observer.complete(); // falls der Stream keine weiteren Daten mehr liefern wird.
      }, 500 );

      return {
        unsubscribe () {
          dispose ();
        }
      };
    } );
    const subscription                   =
            // ist das automatisch Beenden nach 3 Durchläufen take (3) === 1.5s
            this.subscribe ( observable.pipe ( take ( 3 ) ), 'new observer' );
    // manuelle Beenden nach 1 Sek
    interval ( 1000 )
      .pipe ( first () )
      .subscribe ( next => {
        subscription.unsubscribe ();
      } );
  }

  private initIntervalSample () {
    const observable: Observable<number> = interval ( 100 );
    const piped                          = observable.pipe ( take ( 5 ) );
    this.subscribe ( piped, 'int 1' );

    this.subscriptions.push (
      interval ( 200 )
        .pipe ( first () )
        .subscribe ( next => {
          this.subscribe ( piped, 'int 2' );
        } )
    );
  }

  private initRangeSample () {
    // alt nicht mehr verwenden: Observable.of
    const observable: Observable<number> = range ( 2, 5 ); // 2, 3, 4, 5, 6
    const piped                          = observable.pipe (
      filter ( x => x % 2 === 0 ), // 2, 4, 6
      map ( x => x * 10 ), // 20, 40, 60
      scan ( ( acc, value ) => acc = acc + value ), // 20, 60, 120
      map ( x => x / 10 ) // 2, 6, 120
      // last() // 120
      // find( x => x === 40 ) // 40
    );
    // this.subscripte ( observable, 'range' );
    this.subscribe ( piped, 'piped range' );
  }

  private initOfSample () {
    // alt nicht mehr verwenden: Observable.of
    const observable: Observable<number> = of ( 1, 2, 3 );
    this.subscribe ( observable, 'of - sub 1' );
    this.subscribe ( observable, 'of - sub 2' );
  }

  private subscribe ( observable: Observable<any>, msg: string = '' ): Subscription {
    const subscription = observable.subscribe (
      next => {
        console.log ( `${msg} next`, next );
      },
      error => {
        console.error ( `${msg} next`, error );
      },
      () => {
        console.log ( `${msg} ich habe fertig .... ` );
      }
    );
    this.subscriptions.push ( subscription );
    return subscription;
  }
}
