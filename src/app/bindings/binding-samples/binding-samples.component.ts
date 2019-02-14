import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'msg-binding-samples',
  templateUrl: './binding-samples.component.html',
  styleUrls  : [ './binding-samples.component.scss' ]
} )
export class BindingSamplesComponent implements OnInit, OnDestroy {

  name          = 'Saban Ünlü';
  size          = '200/300';
  pi            = Math.PI;
  img           = 'https://placekitten.com/g/200/300';
  label         = 'Bild einer Katze';
  html          = '<strong>Hello</strong> World <script>alert("you are hacked")</script>';
  color         = 'red';
  blueClassName = 'makeblue';
  redClassName  = 'makered';
  selected      = false;
  otherName     = 'Hello World';
  user          = { firstname: 'saban', lastname: 'ünlü'};
  private intervalID: number;

  constructor() {
  }

  ngOnInit() {
    this.intervalID = window.setInterval ( () => {
      this.pi ++;
    }, 1000 );
  }

  combine(): string {
    return `${this.name} ${this.pi}`; // this.name + ' ' + this.pi
  }

  chgName( event: MouseEvent ) {
    this.name = 'Peter Müller';
  }

  chgValue( value: string ) {
    this.name = value;
  }

  stopInterval() {
    window.clearInterval ( this.intervalID );
  }

  ngOnDestroy(): void {
    this.stopInterval ();
  }

  setAsSelected() {
    this.selected = !this.selected;
  }
}
