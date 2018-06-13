import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Observable, of, range, Subscription } from 'rxjs';
import { scan, share } from 'rxjs/operators';

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
    this.createWithNew ();
  }

  private createWithNew () {
    const observable: Observable<number> = new Observable<number> (
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
}
