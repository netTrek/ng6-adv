import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component ( {
  selector   : 'post-auto-detect',
  templateUrl: './auto-detect.component.html',
  styleUrls  : [ './auto-detect.component.scss' ]
} )
export class AutoDetectComponent implements OnInit, OnDestroy {
  count: number;
  private subscriptions: Subscription[] = [];

  constructor () {
  }

  ngOnInit () {
    this.subscriptions.push ( interval ( 500 )
      .pipe (
        scan ( acc => acc + 1, 0 )
      )
      .subscribe ( next => this.count = next ) );
  }

  ngOnDestroy (): void {
    while ( this.subscriptions.length > 0 ) {
      this.subscriptions.pop().unsubscribe();
    }
  }

}
