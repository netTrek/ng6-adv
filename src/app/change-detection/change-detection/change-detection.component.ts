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
  get outerVal (): number {
    return this._outerVal;
  }

  set outerVal ( value: number ) {
    this._outerVal = value;
    this.cdr.detectChanges();
  }

  private _outerVal = -1;

  constructor( private cdr: ChangeDetectorRef ) { }

  ngOnInit() {
    // interval( 500 ).pipe( take( 100 )).subscribe(
    //   next => {
    //     this.outerVal = next;
    //   }
    // );
  }

}
