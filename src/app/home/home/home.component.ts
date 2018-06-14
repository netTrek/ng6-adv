import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'post-home',
  template: `
    <p>
      home works!
    </p>
    <button (click)="goToList()">go list</button>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private $router: Router ) { }

  ngOnInit() {
  }

  goToList () {
    this.$router.navigate( [ 'list'] );
  }
}
