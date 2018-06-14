import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, fromEvent, interval, Observable, of, range, Subject, Subscription } from 'rxjs';
import { filter, map, scan, share, take, tap, throttleTime } from 'rxjs/operators';

@NgModule ( {
  imports     : [
    CommonModule
  ],
  declarations: []
} )
export class StreamModule {

  constructor () {
    // this.factoryOf ();
    // this.factoryRange();
    // this.factoryInterval();
    // this.factoryIntervalMulti();
    // this.factoryCreate();
    // this.createWithNew ();
    // this.factoryFromEvent();
    // this.initSubject ();
    this.initBehaviorSubject ();
  }

  private factoryFromEvent() {
    const observable = fromEvent<MouseEvent>( document, 'mousemove' )
      .pipe(
        map<MouseEvent, number> ( mouseEvent => mouseEvent.clientX ),
        throttleTime( 100 ),
        take (10 )
      );
      this.subscripe( observable, true );
      // .subscribe( next => console.log ( next) );
  }

  private createWithNew () {
    let observable: Observable<number> = new Observable<number> (
      observer => {
        let startVal     = 0;
        const intervalID = setInterval ( () => {
          observer.next ( startVal ++ );
        }, 500 );

        return {
          unsubscribe () {
            clearInterval ( intervalID );
          }
        };
      }
    );
    observable = observable.pipe(
      tap( next => console.warn( 'original :::: ', next )),
      map( x => x + 100 ),
      tap( next => console.warn( 'after map :::: ', next )),
      filter( x => x % 2 === 0 ),
      tap( next => console.warn( 'after filter :::: ', next )),
      take( 2 ), // auto unsubscipe first () === take (1)
      tap( next => console.warn( 'show info from tap :::: ', next ))
    );
    const subscriptions: Subscription[] = this.subscripe ( observable, true );
    setTimeout ( () => {
      while ( subscriptions.length > 0 ) {
        subscriptions.pop ()
                     .unsubscribe ();
      }
    }, 10000 );
  }

  private factoryCreate () {
    const observable: Observable<number> = Observable.create ( observer => {
      observer.next ( 1 );
      observer.next ( 2 );
      observer.error ( 'ab wert 2 fehler' );
      observer.next ( 3 );
      observer.complete ();
    } );
    this.subscripe ( observable, true );
  }

  private factoryOf () {
    const observable: Observable<number> = of ( 1, 2, 3 );
    this.subscripe ( observable );
  }

  private factoryRange () {
    const observable: Observable<number> = range ( 2, 5 );
    this.subscripe ( observable );
  }

  // cold
  private factoryInterval () {
    const observable: Observable<number> = interval ( 1000 )
      .pipe (
        scan ( ( storageValue, value ) => storageValue + value, 0 )
      );
    observable.subscribe ( next => console.log ( '1st ', next ) );
    // this.subscripe ( observable );
    setTimeout ( () => {
      observable.subscribe ( next => console.log ( '2nd ', next ) );
    }, 1000 );
  }

  // hot via multicast
  private factoryIntervalMulti () {
    const observable: Observable<number> = interval ( 1000 )
      .pipe (
        scan ( ( storageValue, value ) => storageValue + value, 0 )
      );

    const multi = observable.pipe ( share () );

    multi.subscribe ( next => console.log ( '1st ', next ) );
    // this.subscripe ( observable );
    setTimeout ( () => {
      multi.subscribe ( next => console.log ( '2nd ', next ) );
    }, 1000 );
  }

  private subscripe ( observable: Observable<number>, oneOnly: boolean = false ): Subscription[] {
    const subscriptions: Subscription[] = [];
    subscriptions.push (
      observable.subscribe (
        next => console.log ( next ),
        err => console.error ( err ),
        () => console.log ( 'ich habe fertig' )
      ) );
    if ( ! oneOnly ) {
      subscriptions.push (
        observable.subscribe (
          next => console.log ( next ),
          err => console.error ( err ),
          () => console.log ( 'ich habe fertig' )
        ) );
    }
    return subscriptions;
  }

  private initSubject () {
    const sub: Subject<number> = new Subject<number>();
    sub.next( 1 );
    sub.subscribe ( next => console.log ( '1st ', next ) );
    sub.next( 2 );
    this.subscripe( sub , true );
    sub.next( 3 );
    sub.next( 4 );
  }

  private initBehaviorSubject () {
    const sub: BehaviorSubject<number> = new BehaviorSubject<number>( null );
    sub.subscribe ( next => console.log ( '1st ', next ) );
    sub.next( 1 );
    sub.subscribe ( next => console.log ( '2st ', next ) );
    sub.next( 2 );
    this.subscripe( sub , true );
    sub.next( 3 );
    sub.next( 4 );
  }
}
