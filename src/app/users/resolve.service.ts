import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service';

@Injectable()
export class ResolveService implements Resolve<User> {

  constructor( private $user: UserService ) { }

  resolve ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User> | Promise<User> | User {
    return this.$user.getUserById( Number ( route.paramMap.get('id') ) );
  }
}
