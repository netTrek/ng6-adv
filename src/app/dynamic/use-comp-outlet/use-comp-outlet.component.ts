import { Component, OnInit, Type } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'post-use-comp-outlet',
  templateUrl: './use-comp-outlet.component.html',
  styleUrls: ['./use-comp-outlet.component.scss']
})
export class UseCompOutletComponent implements OnInit {

  comp2create: Type<DynamicComponent> = DynamicComponent;

  constructor() { }

  ngOnInit() {
  }

}
