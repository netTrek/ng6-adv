import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


let numOfCount = 0;

@Injectable()
export class ReqCountService {

  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>( false );
  complete$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>( true );

  constructor() { }

  increment () {
    ++numOfCount;
    this.updateSate ();
  }

  decrement () {
    --numOfCount;
    this.updateSate ();
  }

  private updateSate () {
    this.loading$.next( numOfCount > 0 );
    this.complete$.next( numOfCount === 0 );
  }
}
