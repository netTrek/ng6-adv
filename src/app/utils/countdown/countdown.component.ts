import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  progress = 100;

  constructor() { }

  ngOnInit() {
  }

}
