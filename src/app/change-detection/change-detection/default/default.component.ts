import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'pr-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  val = -1;

  constructor( private cdr: ChangeDetectorRef ) { }

  ngOnInit() {
    interval( 500 ).pipe( take (10) )
      .subscribe( next => {
        this.val = next;
        // if ( this.val > 3 && this.val < 7 ) {
        //   this.cdr.detach();
        // } else if ( this.val === 7 ) {
        //   this.cdr.reattach();
        // }
        // console.log ( this.val );
      } );
  }

}
