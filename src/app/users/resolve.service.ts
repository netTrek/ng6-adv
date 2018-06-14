import { Injectable } from '@angular/core';
import { UsersModule } from './users.module';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: UsersModule
})
export class ResolveService implements Resolve<User> {

  constructor( private $user: UserService ) { }

  resolve ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User> | Promise<User> | User {
    return this.$user.
      getUserById( Number ( route.paramMap.get( 'id') ) );
  }
}
