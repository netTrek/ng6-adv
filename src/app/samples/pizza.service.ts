import { Injectable } from '@angular/core';


// @Injectable()
@Injectable({
  providedIn: 'root' // app.module -> providers [PizzaService]
})
export class PizzaService {

  crrPizza = 'tonno';

  constructor( ) {
    console.log ( 'service constructor' );
  }

  chgPizza ( trimmed: string ) {
    this.crrPizza = trimmed;
  }
}
