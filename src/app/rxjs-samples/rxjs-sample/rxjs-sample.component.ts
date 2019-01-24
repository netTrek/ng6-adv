import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable, of, range, Subject, Subscription } from 'rxjs';
import { filter, first, map, take, tap } from 'rxjs/operators';

@Component ( {
  selector     : 'dvz-rxjs-sample',
  templateUrl  : './rxjs-sample.component.html',
  styleUrls    : [ './rxjs-sample.component.scss' ],
  encapsulation: ViewEncapsulation.ShadowDom
} )
export class RxjsSampleComponent implements OnInit {

  constructor () {
  }

  ngOnInit () {
    // this.initOfSample ();
    // this.initRangeSample ();
    // this.initIntervalSample();
    // this.initNewSample ();
    // this.initFromEventSample();
    // this.initSubjectSample();
    this.initBehaviourSubjectSample();
  }

  private initBehaviourSubjectSample() {
    const observable: BehaviorSubject<number> =
          new BehaviorSubject( 0 );

    this.subscripe( observable, '0#' );
    observable.next( 1 );
    this.subscripe( observable, '1#' );
    observable.next( 2 );
    observable.next( 3 );
    this.subscripe( observable, '2#' );
    observable.next( 4 );
    observable.next( 5 );
    this.subscripe( observable, '3#' );
    observable.complete();
    this.subscripe( observable, '4#' );
  }

  private initSubjectSample() {
    const observable: Subject<number> =
          new Subject();

    observable.next( 0 );
    observable.next( 1 );
    this.subscripe( observable, '1#' );
    observable.next( 2 );
    observable.next( 3 );
    this.subscripe( observable, '2#' );
    observable.next( 4 );
    observable.next( 5 );
    this.subscripe( observable, '3#' );
    observable.complete();
  }

  private initFromEventSample() {
    this.subscripe(
      fromEvent( document, 'mousemove' )
    );
  }

  private initNewSample () {
    const observable: Observable<number> =
       new Observable( observer => {
         let count = 0;
         let intervalID: number;
         const dispose = () => {
           if ( !!intervalID ) {
             window.clearInterval( intervalID );
             intervalID = undefined;
             observer.complete();
           }
         };
         intervalID = window.setInterval(
           () => {
             observer.next( count ++ );
             console.warn ( 'inner', count );
             if ( count === 100 ) {
               dispose();
             }
           }, 100
         );
         return dispose;
       });
    this.subscripe( observable.pipe( take (3) ) );
  }

  private initIntervalSample () {
    const observable: Observable<number> =
            interval( 100 ).pipe(
              take ( 3 )
            );
    this.subscripe( observable );
  }

  private initRangeSample () {
    const observable: Observable<number> =
            range( 1, 4 );
    const pipedObservable: Observable<number> =
            observable.pipe(
              tap( next => console.log (next) ),
              map( value => value * 10 ),
              filter( value => value > 20 ),
              first()
            );
    this.subscripe( pipedObservable, '1' );
  }
  private initOfSample () {
    const observable: Observable<number> =
            of ( 1, 2, 3, 4 );
    const pipedObservable: Observable<number> =
            observable.pipe(
              map( value => value * 10 ),
              filter( value => value > 20 ),
              first()
            );
    this.subscripe( pipedObservable, '1' );
  }

  private subscripe (
    observable: Observable<any>,
    msg: string = ''
  ): Subscription {
    return observable.subscribe (
      next =>
        console.log ( `next ${msg}`, next ),
      error =>
        console.error ( `error ${msg}`, error ),
      () => {
        console.log ( `ich habe fertig ${msg}` );
      }
    );
  }

}
