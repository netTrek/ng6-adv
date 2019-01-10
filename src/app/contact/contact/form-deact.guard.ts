import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from './form/form.component';

@Injectable({
  providedIn: 'root'
})
export class FormDeactGuard implements CanDeactivate<FormComponent> {
  canDeactivate ( component: FormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    return component.myInput.value === 'hallo';
  }
}
