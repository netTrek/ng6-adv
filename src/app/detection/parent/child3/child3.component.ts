import { Component, OnInit } from '@angular/core';
import { ComService } from '../com.service';

@Component({
  selector: 'post-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  constructor( public $com: ComService ) { }

  ngOnInit() {
  }

}
