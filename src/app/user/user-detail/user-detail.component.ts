import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'msg-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  id: number;
  private sub: Subscription;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    console.log ( 'init userDetails' );
    this.sub = this.route.paramMap.pipe(
      map( value => parseInt( value.get('id') as string, 10 ))
    ).subscribe(
      id => {
        this.id = id;
        console.log ( 'update userDetails id' );
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
