import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'post-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushComponent implements OnInit, OnDestroy {

  count: number;
  private subscriptions: Subscription[] = [];

  constructor ( private cdr: ChangeDetectorRef ) {
  }

  ngOnInit () {
    this.subscriptions.push ( interval ( 500 )
      .pipe (
        scan ( acc => acc + 1, 0 )
      )
      .subscribe ( next => {
        this.count = next;
        this.cdr.detectChanges();
      } ) );
  }

  ngOnDestroy (): void {
    while ( this.subscriptions.length > 0 ) {
      this.subscriptions.pop().unsubscribe();
    }
  }

}
