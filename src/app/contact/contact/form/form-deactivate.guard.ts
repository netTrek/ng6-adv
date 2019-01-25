import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from './form.component';

@Injectable({
  providedIn: 'root'
})
export class FormDeactivateGuard implements CanDeactivate<FormComponent> {
  canDeactivate ( component: FormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
