import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


// @Injectable()
@Injectable({
  providedIn: 'root' // app.module -> providers [PizzaService]
})
export class PizzaService {

  // crrPizza = 'tonno';
  crrPizza$: BehaviorSubject<string> = new BehaviorSubject<string>( 'tonno' );

  constructor( ) {
    console.log ( 'service constructor' );
  }

  chgPizza ( trimmed: string ) {
    // this.crrPizza = trimmed;
    this.crrPizza$.next( trimmed );
  }
}
