import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user';

@Component ( {
  selector     : 'dvz-user',
  templateUrl  : './user.component.html',
  styleUrls    : [ './user.component.scss' ],
  encapsulation: ViewEncapsulation.ShadowDom
} )
export class UserComponent implements OnInit {
  id: number;
  user: User;

  constructor ( private $route: ActivatedRoute, private $user: UserService ) {
  }

  ngOnInit () {
    this.$route.paramMap
        .pipe (
          map ( value => parseInt ( value.get ( 'id' ), 10 ) )
        )
        .subscribe (
          next => {
            this.id = next;
            this.$user.getUserByID( this.id ).then( user => {
              return this.user = user;
            } );
          }
        );
  }

}
