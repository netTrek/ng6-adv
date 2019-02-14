import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'msg-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  width = 100;
  duration = 3;
  private interval: number;
  constructor() { }

  ngOnInit() {
    const step = this.width / this.duration;
    this.interval = window.setInterval( () => {
      this.width -= step;
      console.log ( this.width );
      if ( this.width <= 0 ) {
        this.width = 0;
        this.stop();
      }
    }, 1000 );
  }

  ngOnDestroy(): void {
    this.stop();
  }

  private stop() {
    window.clearInterval( this.interval );
  }
}
