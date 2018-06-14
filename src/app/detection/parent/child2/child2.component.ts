import { Component, OnInit } from '@angular/core';
import { ComService } from '../com.service';

@Component({
  selector: 'post-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  constructor( public $com: ComService ) { }

  ngOnInit() {
  }

  changeValue () {
    this.$com.value$.next( Date.now() );
  }
}
