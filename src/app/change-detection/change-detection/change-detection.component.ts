import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'pr-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {

  interv = interval( 500 ).pipe( take (100) );

  private _outerVal = -1;

  constructor(  ) { }

  ngOnInit() {}

}
