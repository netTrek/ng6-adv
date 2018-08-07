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
…
