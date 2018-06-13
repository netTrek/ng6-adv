import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  @Input()
  data: any;

  constructor() { }

  ngOnInit() {
  }

}
