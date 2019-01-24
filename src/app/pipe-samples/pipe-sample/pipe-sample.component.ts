import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dvz-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls: ['./pipe-sample.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PipeSampleComponent implements OnInit {

  num = Math.PI;
  date = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
