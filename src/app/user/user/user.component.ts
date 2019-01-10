import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, skipWhile, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component ( {
  selector   : 'pl-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {

  user: User;

  // version 3
  // user$: Observable<User|undefined>;
  // userid: string;

  // version 2
  // userid: Observable<number>;

  // version 1
  // userid: number;

  constructor ( private $activatedRoute: ActivatedRoute, private $user: UserService ) {
  }

  ngOnInit () {

    this.$activatedRoute.data
        .pipe(
          tap ( x => console.log( x.myValue) ),
          map ( value => value.userResolve )
        )
        .subscribe(
          resolvedUser => this.user = resolvedUser
        );

    // Version 3
    // this.user$ = this.$activatedRoute.paramMap.pipe(
    //     map ( paramMap => paramMap.get ( 'userid' ) ), // hole den Parameter
    //     tap ( userid => this.userid = userid ), // merke dir den Parameter
    //     map ( userid => parseInt( userid , 10 ) ), // wandle parameter in Zahl
    //     skipWhile ( userid => isNaN( userid ) ), // wenn wert eine gültige Zahl
    //     switchMap( userid => this.$user.getUserById( userid ) ), // gebe einen äußeren Observable zurück
    //     catchError( err => of ( undefined ) ) // Handle fehler wür skipWhile und SwitchMap
    // );

    // version 2
    // this.userid =
    //   this.$activatedRoute.paramMap.pipe(
    //     map ( paramMap => parseInt( paramMap.get ( 'userid' ) , 10 ) )
    // );

    // version 1
    // this.$activatedRoute.paramMap
    //     .pipe (
    //       map ( paramMap => paramMap.get ( 'userid' ) )
    //     )
    //     .subscribe (
    //       userid => this.userid = parseInt ( userid, 10 )
    //   );
  }

}
