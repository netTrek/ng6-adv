import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'pl-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {


  width = 100;
  @Input ()
  speed = 10;
  private intervalID: number;

  constructor() { }

  ngOnInit() {
    this.startInterval();
  }

  ngOnDestroy (): void {
    this.stopInterval();
  }

  private startInterval () {

    this.intervalID = window.setInterval( () => {
      this.width -= Number (this.speed);
      if ( this.width <= 0 ) {
        this.width = 0;
        this.stopInterval();
      }
    }, 250 );
  }

  private stopInterval () {
    if ( !! this.intervalID ) {
      window.clearInterval( this.intervalID );
      this.intervalID = undefined;
    }
  }
}
