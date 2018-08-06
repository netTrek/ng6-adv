import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pr-pipe-samples',
  templateUrl: './pipe-samples.component.html',
  styleUrls  : [ './pipe-samples.component.scss' ]
} )
export class PipeSamplesComponent implements OnInit {

  helloWorld = 'Hello Wolrd';
  pi         = Math.PI;
  date       = Date.now ();

  sampleObj = {
    key1: 'val1',
    key2: 'val2',
    key3: 'val3',
    key4: 'val4',
    key5: 'val5'
  };

  constructor () {
  }

  ngOnInit () {
  }

}
