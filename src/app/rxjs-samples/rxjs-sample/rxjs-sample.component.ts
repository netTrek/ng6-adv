import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable, of, range, Subject, Subscription } from 'rxjs';
import { filter, find, first, map, scan, take } from 'rxjs/operators';

@Component({
  selector: 'pl-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls: ['./rxjs-sample.component.scss']
})
export class RxjsSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.initOfSample();
    // this.initRange();
    // this.initInterval();
    // this.initNew();
    // this.initFromEvent();
    // this.initSub ();
    this.initBeSub ();
  }

  private initBeSub () {
    // HOT
    const sub: BehaviorSubject<number> = new BehaviorSubject( 0 );
    this.doSubscription( sub, '1. ' );
    sub.next( 1 );
    this.doSubscription( sub, '2. ' );
    sub.next( 2 );
    sub.next( 3 );
    this.doSubscription( sub, '3. ' );
    sub.next( 4 );
    sub.next( 5 );
  }

  private initSub () {
    // HOT
    const sub: Subject<number> = new Subject();
    sub.next( 1 );
    this.doSubscription( sub, '1. ' );
    sub.next( 2 );
    sub.next( 3 );
    this.doSubscription( sub, '2. ' );
    sub.next( 4 );
    sub.next( 5 );
  }

  private initFromEvent() {
    const observable: Observable<number> = fromEvent<MouseEvent>(
      document, 'mousemove'
    ).pipe(
      map ( value => value.clientX ),
      filter ( value => value > 100 )
    );
    this.doSubscription( observable );
  }

  private initNew () {
    const observable: Observable<number> = new Observable<number>( observer => {
      let value = 0;
      let intervalId: number;

      const dispose = () => {
        if ( !! intervalId ) {
          window.clearInterval( intervalId );
          intervalId = undefined;
        }
      };

      intervalId = window.setInterval( () => {
        // console.log ( 'ich arbeite noch' );
        observer.next( value ++ );
        if ( value === 15 ) {
          dispose();
          observer.complete();
        }
      }, 100 );

      // return {
      //   unsubscribe() {
      //     dispose();
      //   }
      // };
      // oder
      return dispose;

    });
    const sub = this.doSubscription( observable, '1. ' );
    // sub.unsubscribe();
    setTimeout( () => {
      sub.unsubscribe();
    }, 200 );
    this.doSubscription( observable, '2. ' );


    // warte 200ms bis zum unsubscribe();

    // const intervalObPiped = interval( 200 ).pipe( first() );
    // intervalObPiped.subscribe(
    //   next => {
    //     sub.unsubscribe();
    //   }
    // );
  }

  private initInterval () {
    const observable: Observable<number> = interval( 100 ).pipe(
      // first()
      take( 10 )
    );
    this.doSubscription( observable );
  }

  private initRange () {
    const observable: Observable<number> = range( 2, 5); // 2, 3, 4, 5, 6
    const pipedObservable: Observable<number> = observable.pipe(
      filter( value => value % 2 === 0 ), // 2, 4, 6
      map( value => value * 10), // 20, 40, 60
      scan( (acc, value) => acc = acc + value ), // 20, 60, 120
      find ( value => value === 60 )
    );
    this.doSubscription ( pipedObservable, 'range [2-6] - ' );
  }

  private initOfSample () {
    const observable: Observable<number> = of ( 1, 2, 3 );
    this.doSubscription ( observable, 'of beispiel 1 -' );
    this.doSubscription ( observable, 'of beispiel 2 -' );
  }

  private doSubscription ( observable: Observable<any>, msg: string = '' ): Subscription {
    const sub: Subscription = observable.subscribe(
      next => {
        console.log ( `${msg} next`, next );
      },
      error => {
        console.log ( `${msg} error`, error );
      },
      () => {
        console.log ( `${msg} ist fertig!` );
      }
    );
    return sub;
  }
}
