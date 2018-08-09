import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { PipeSamplesComponent } from './pipe-samples/pipe-samples.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { FillStatePipe } from './pipes/fill-state.pipe';
import { RxjsSamplesComponent } from './rxjs-samples/rxjs-samples.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaComponent } from './pizzas/pizza/pizza.component';
import { MY_LIST } from '../token/InjectionTokens';
// import { PizzaService } from './pizza.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ DecimalPipe,
               { provide: MY_LIST, useValue: 'value from samples', multi: true }
               ],
  declarations: [PipeSamplesComponent, ReversePipe, FillStatePipe, RxjsSamplesComponent, PizzasComponent, PizzaComponent],
  exports: [PipeSamplesComponent, ReversePipe, FillStatePipe, RxjsSamplesComponent, PizzasComponent, PizzaComponent]
})
export class SamplesModule { }
