import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<User> {

  constructor ( private $user: UserService ) {}

  resolve ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User|string> {
    const id = parseInt( route.paramMap.get( 'userid' ) , 10 );
    return this.$user.getUserById( id )
      .pipe(
        catchError( err => of ( 'could not load data for ' + id ) )
      );
  }

}
