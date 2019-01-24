import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { first, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckActivateGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return interval( 150 ).pipe( mapTo (true ), first() ) ;
  }
}
