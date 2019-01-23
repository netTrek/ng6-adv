import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector     : 'dvz-countdown',
  templateUrl  : './countdown.component.html',
  styleUrls    : [ './countdown.component.scss' ],
  encapsulation: ViewEncapsulation.ShadowDom
} )
export class CountdownComponent implements OnInit, OnDestroy {

  width = 100;
  count = 11;

  private intervalID: number;

  constructor () {}

  ngOnInit () {
    this.startInterval ();
  }

  ngOnDestroy (): void {
    this.stopInterval ();
  }

  private startInterval () {
    this.intervalID = window.setInterval ( () => {
      this.width -= 100 / this.count;
      if ( this.width < 0 ) {
        this.width = 0;
        this.stopInterval();
      } }, 500 );
  }

  private stopInterval () {
    if ( ! ! this.intervalID ) {
      window.clearInterval ( this.intervalID );
      this.intervalID = undefined;
    }
  }
}
