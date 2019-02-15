import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'msg-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  id: number;
  user: User;

  private sub: Subscription;

  constructor( private route: ActivatedRoute, private $user: UserService ) { }

  ngOnInit() {
    this.sub = this.route.paramMap.pipe(
      map( value => parseInt( value.get('id') as string, 10 ))
    ).subscribe(
      id => {
        this.id = id;
        this.$user.getUserById ( this.id ).then( user => this.user = user );
        // console.log ( 'update userDetails id' );
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
