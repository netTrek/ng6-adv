import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'pr-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  constructor( public $pizza: PizzaService) { }

  ngOnInit() {
  }

  changepizza ( inputRef: HTMLInputElement ) {
    const trimmed = inputRef.value.trim();
    if ( trimmed.length > 0 ) {
      this.$pizza.chgPizza ( trimmed );
      inputRef.value = '';
    }
  }
}
