import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable, of, range, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, first, map, pairwise, skipWhile, take } from 'rxjs/operators';

@Component ( {
  selector   : 'msg-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls  : [ './rxjs-sample.component.scss' ]
} )
export class RxjsSampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // this.initOfSample ();
    // this.initRangeSample ();
    // this.initIntervalSample ();
    // this.initNewSample ();
    // this.initFromEvent ();
    // this.initSubSample ();
    this.initBeSubSample ();
  }

  private initBeSubSample() {
    const observable: BehaviorSubject<number> = new BehaviorSubject( 0 );
    this.subscriptTo( observable, '#0' );
    observable.next( 1 );
    observable.next( 2 );
    observable.next( 3 );
    this.subscriptTo( observable, '#1' );
    observable.next( 4 );
    this.subscriptTo( observable, '#2' );
    observable.next( 5 );
    observable.next( 6 );
    observable.next( 7 );
    this.subscriptTo( observable, '#3' );
  }

  private initSubSample() {
    const observable: Subject<number> = new Subject();
    observable.next( 1 );
    observable.next( 2 );
    observable.next( 3 );
    this.subscriptTo( observable, '#1' );
    observable.next( 4 );
    this.subscriptTo( observable, '#2' );
    observable.next( 5 );
    observable.next( 6 );
    observable.next( 7 );
    this.subscriptTo( observable, '#3' );
  }

  private initFromEvent() {
    const observable = fromEvent<MouseEvent> ( document, 'mousemove' )
      .pipe (
        map ( value => value.clientX ),
        distinctUntilChanged (),
        pairwise (),
        map ( value => {
          if ( value[ 0 ] > value[ 1 ] ) {
            return 'left';
          } else if ( value[ 0 ] < value[ 1 ] ) {
            return 'right';
          } else {
            return null;
          }
        } ),
        distinctUntilChanged ()
      );
    this.subscriptTo ( observable );
  }

  private initNewSample() {
    const observable: Observable<number> = new Observable ( observer => {
      let start        = 0;
      const intervalID = window.setInterval ( () => {
        observer.next ( start ++ );
      }, 100 );
      const dispose    = () => {
        window.clearInterval ( intervalID );
      };
      return dispose;
    } );
    const piped                          = observable.pipe (
      take ( 10 ),
      skipWhile ( value => value < 3 ),
      map ( value => value * 10 ),
      filter ( value => value > 50 )
    );
    this.subscriptTo ( piped, '1' );
  }

  private initIntervalSample() {
    const observable: Observable<number> = interval ( 200 )
      .pipe (
        // take ( 3 )
        // first()
      );
    const sub                            = this.subscriptTo ( observable, '1#' );
    // interval( 300 ).pipe(
    //   first()
    // ).subscribe( _ => this.subscriptTo ( observable, '2#' ) );
    interval ( 200 )
      .pipe ( take ( 3 ) )
      .subscribe (
        _ => sub.unsubscribe ()
      );
  }

  private initRangeSample() {
    const observable: Observable<number> = range ( 2, 5 );
    this.subscriptTo ( observable, '1#' );
    this.subscriptTo ( observable, '2#' );
  }

  private initOfSample() {
    const observable: Observable<number> = of ( 1, 2, 3, 4, 5 );
    this.subscriptTo ( observable, '1#' );
    this.subscriptTo ( observable, '2#' );
  }

  private subscriptTo<T>( observable: Observable<T>, msg: string = '' ): Subscription {
    return observable.subscribe (
      next => {
        console.log ( `${msg} next val`, next );
      },
      error => {
        console.error ( `${msg} error val`, error );
      },
      () => {
        console.log ( `${msg} ich habe fertig` );
      }
    );
  }
}
