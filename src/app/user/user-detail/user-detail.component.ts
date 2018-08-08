import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component ( {
  selector   : 'pr-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls  : [ './user-detail.component.scss' ]
} )
export class UserDetailComponent implements OnInit, OnDestroy {
  id: number;
  user: User;
  private readonly subscriptions: Subscription[] = [];
  constructor ( private route: ActivatedRoute, private router: Router, private $user: UserService ) {
  }
  ngOnDestroy (): void {
    while ( this.subscriptions.length > 0 ) {
      this.subscriptions.pop().unsubscribe();
    }
  }
  ngOnInit () {
    this.subscriptions.push (
      this.route.paramMap.pipe (
            map ( params => Number ( params.get ( 'id' ) ) ) )
          .subscribe ( next => {
            this.id = next;
            this.$user.getUserById( this.id ).then ( user => this.user = user );
          } )
      );
  }
  goToNext () {
    this.router.navigate ( [ 'users', ++ this.id ] );
  }
}
