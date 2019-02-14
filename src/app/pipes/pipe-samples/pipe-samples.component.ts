import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'msg-pipe-samples',
  templateUrl: './pipe-samples.component.html',
  styleUrls  : [ './pipe-samples.component.scss' ]
} )
export class PipeSamplesComponent implements OnInit {

  list  = [ 1,
            2,
            3,
            4,
            5
  ];
  pi    = Math.PI;
  today = Date.now ();
  name  = 'saban ünlü';

  constructor() {
  }

  ngOnInit() {
  }

}
