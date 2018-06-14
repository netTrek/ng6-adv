import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { scan, tap } from 'rxjs/operators';
import { PushComponent } from '../push/push.component';

@Component ( {
  selector   : 'post-auto-detect',
  templateUrl: './auto-detect.component.html',
  styleUrls  : [ './auto-detect.component.scss' ]
} )
export class AutoDetectComponent implements OnInit, OnDestroy {

  count: number;
  count$: Subject<number> = new Subject<number>();

  private subscriptions: Subscription[] = [];

  constructor () {
  }

  ngOnInit () {
    this.subscriptions.push (
      interval ( 500 )
        .pipe (
          tap ( n => this.count$.next(n) ),
          scan ( ( acc, value ) => acc + 1, 0 )
        )
        .subscribe ( next => this.count = next )
    );
  }

  ngOnDestroy (): void {
    while ( this.subscriptions.length > 0 ) {
      this.subscriptions.pop ()
          .unsubscribe ();
    }
  }

}
