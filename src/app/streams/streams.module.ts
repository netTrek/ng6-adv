import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of, pipe, range, fromEvent, Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, filter, find, map, throttle, throttleTime } from 'rxjs/operators';

@NgModule ( {
  imports     : [
    CommonModule
  ],
  declarations: []
} )
export class StreamsModule {

  constructor () {
    this.initOf ();
    // this.initRange ();
    // this.initCreate ();
    // this.initWithNew ();
    // this.initMapOp ();
    // this.initMapAndFilterOp ();
    // this.initMapFilterAndFindOp ();
    // this.initFromEvent ();
    // this.initSubject ();
    // this.initBehaSubject ();
  }

  private initOf () {
    const observabel: Observable<number> = of ( 1, 2, 3 );
    this.subscripe ( observabel );
  }

  private initRange () {
    const observabel: Observable<number> = range ( 2, 4 );
    this.subscripe ( observabel );
  }

  private subscripe ( observabel: Observable<number> ) {
    // je ein durchlauf (cold)
    observabel.subscribe ( next => console.log ( next ) );
    observabel.subscribe ( next => console.log ( next ) );
  }

  private initCreate () {
    Observable.create ( observer => {
      observer.next ( 1 );
      observer.next ( 2 );
      // observer.error( 'error :(');
      observer.next ( 3 );
      observer.complete();
    }).subscribe(
      next => console.log ( 'initCreate next', next ),
      err => console.log ( 'initCreate err', err ),
      () => console.log ( 'initCreate complete' ),
    );
  }

  private initWithNew () {
    const obs = new Observable( observer => {

      observer.next ( 1 );
      observer.next ( 2 );
      observer.next ( 3 );
      observer.complete();

      return {unsubscribe() {
        console.log ( 'cancel' );
        }};
    }).subscribe(
      next => console.log ( 'initWithNew next', next ),
      err => console.log ( 'initWithNew err', err ),
      () => console.log ( 'initWithNew complete' ),
    );
  }

  private initMapOp () {
    const observabel: Observable<number> = range ( 2, 4 )
      .pipe(
        map( x => x + 1 )
      );
    observabel.subscribe ( next => console.log ( next ) );
  }

  private initMapAndFilterOp () {
    const observabel: Observable<number> = range ( 2, 4 )
      .pipe(
        map( x => 100 + x ),
        filter( x => x % 2 === 0 ),
      );
    observabel.subscribe ( next => console.log ( next ) );
  }

  private initMapFilterAndFindOp () {

    const observabel: Observable<number> = range ( 2, 4 )
      .pipe(
        map( x => 100 + x ),
        filter( x => x % 2 === 0 ),
        find ( x => x === 102 )
      );
  }

  private initFromEvent () {
    const observable = fromEvent ( document, 'mousemove');
    observable
      .pipe(
        debounceTime( 100 )
        // throttleTime( 100 )
      )
      .subscribe( n => console.log ( n , Date.now()) );
  }

  private initSubject () {
    const subject: Subject<number> = new Subject<number>();
    subject.next( 1 );
    subject.next( 2 );
    const subscription = subject.subscribe( n => console.log ( n ) );
    subject.next( 3 );
    subject.next( 4 );
    console.log ( subscription );
    subscription.unsubscribe();
    console.log ( subscription );
    subject.next( 5 );
    subject.next( 6 );
  }

  private initBehaSubject () {
    const subject: BehaviorSubject<number> = new BehaviorSubject<number>( 100 );
    subject.next( subject.getValue() + 1 );
    subject.next( subject.getValue() + 1 );
    const subscription = subject.subscribe( n => console.log ( n ) );
    subject.next( subject.getValue() + 1 );
    subject.next( subject.getValue() + 1 );
    console.log ( subscription );
    subscription.unsubscribe();
    console.log ( subscription );
    subject.next( subject.getValue() + 1 );
    subject.next( subject.getValue() + 1 );
  }
}
