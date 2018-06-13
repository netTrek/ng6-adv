import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Injectable ( {
  providedIn: 'root'
} )
export class UserGuard implements CanActivate, CanDeactivate<UserDetailComponent>, CanLoad {
  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    console.log ( 'allow activate' );
    return true;
  }

  canDeactivate ( component: UserDetailComponent,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    console.log ( 'allow deactivate' );
    return true;
  }

  canLoad ( route: Route ): Observable<boolean> | Promise<boolean> | boolean {
    console.log ( 'allow load' );
    return true;
  }
}
