import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component ( {
  selector   : 'pr-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls  : [ './pizzas.component.scss' ],
  providers  : [ PizzaService ]
} )
export class PizzasComponent implements OnInit {

  constructor ( public $pizza: PizzaService ) {
    this.$pizza.crrPizza$.subscribe (
      next => {
        console.log ( next );
      }
    );
  }

  ngOnInit () {
  }

}
