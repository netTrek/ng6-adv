import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return interval( 1000 ).pipe( mapTo ( true ) );
  }

}
