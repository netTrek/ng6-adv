import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pr-dyn-a',
  templateUrl: './dyn-a.component.html',
  styleUrls: ['./dyn-a.component.scss']
})
export class DynAComponent implements OnInit {

  @Input()
  val = 'default';

  constructor() { }

  ngOnInit() {
  }

}
