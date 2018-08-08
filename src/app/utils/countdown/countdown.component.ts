import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'pr-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements  OnInit, OnDestroy {
  progress = 100; // aktueller Wert
  private countdown = 5; // zeit bis Ende des CountDowns
  private time = 0; // zeit wie lande CountDown schon läuft
  private intervalID: number; // intervalID
  private isDemoMod = true; // Demo = true =>

  @HostBinding ('style.width.%')
  private width = 100;

  // Endlos Schleife
  constructor() { }
  ngOnInit() {
    this.startCountDown ();
  }
  private startCountDown () {
    this.intervalID = window.setInterval ( () => {
      this.progress = Math.round( ( 1 - (++ this.time / this.countdown)) * 100 );
      if ( this.time === this.countdown ) {
        this.stopCountDownAndReset ();
      }
    }, 1000 );
  }
  ngOnDestroy (): void {
    this.stopCountDownAndReset ( true ); // wenn true erzwinge stop auch in Demo
  }
  private stopCountDownAndReset ( force: boolean = false ) {
    window.clearInterval ( this.intervalID );
    this.intervalID = undefined;
    this.countdown = 10;
    this.time = 0;
    if ( this.isDemoMod && !force ) {
      this.startCountDown();
    }
  }
}
