import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'pr-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushComponent implements OnInit {

  @Input()
  outer = -1;

  val = -1;
  constructor( private cdr: ChangeDetectorRef ) { }

  ngOnInit() {
    interval( 500 ).pipe( take (10) )
                   .subscribe( next => {
                     this.val = next;
                     // this.cdr.markForCheck();
                     // this.cdr.detectChanges();
                   } );
  }

}
