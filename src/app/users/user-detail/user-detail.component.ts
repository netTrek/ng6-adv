import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component ( {
  selector   : 'post-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls  : [ './user-detail.component.scss' ]
} )
export class UserDetailComponent implements OnInit, OnDestroy {

  param_id: number;
  user: User;

  private subscriptions: Subscription [] = [];

  constructor ( private route: ActivatedRoute, private $user: UserService ) {
    this.detectParamId ();
    this.detectUser ();
  }

  ngOnInit () {
  }

  ngOnDestroy (): void {
    while ( this.subscriptions.length > 0 ) {
      this.subscriptions.pop ()
          .unsubscribe ();
    }
  }

  private detectParamId () {
    this.subscriptions.push (
      this.route.paramMap.pipe (
        map ( paramMap => paramMap.get ( 'id' ) )
      )
          .subscribe ( id => this.param_id =  Number ( id ) )
    );
  }

  private detectUser () {
    this.subscriptions.push (
      this.route.data
          .subscribe ( data => this.user = data.user )
    );
  }
}
