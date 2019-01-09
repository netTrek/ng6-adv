import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pl-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls  : [ './pipe-sample.component.scss' ]
} )
export class PipeSampleComponent implements OnInit {

  sampleString = 'Saban Ünlü';
  sampleNumber = Math.PI;
  sampleDate = Date.now();
  sampleJson = { str: this.sampleString, num: this.sampleNumber};
  sampleList: string[] = [
                            'wert1',
                            'wert2',
                            'wert3',
                            'wert4',
                            'wert5',
                            'wert6'
                          ];

  constructor () {
  }

  ngOnInit () {
  }

}
