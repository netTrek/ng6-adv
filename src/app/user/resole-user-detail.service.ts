import { Injectable } from '@angular/core';
import { UserModule } from './user.module';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable ( {
  providedIn: UserModule
} )
export class ResoleUserDetailService implements Resolve<User> {

  constructor ( private $user: UserService ) {
  }

  resolve ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User> | Promise<User> | User {
    return new Promise ( resolve => {
      this.$user.getUserById ( Number ( route.paramMap.get ( 'id' ) ) )
          .then (
            success => resolve ( success ),
            failed => resolve ( undefined )
          );
    } );
  }
}
