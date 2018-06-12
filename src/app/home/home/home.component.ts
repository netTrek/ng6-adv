import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'post-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private $router: Router) { }

  ngOnInit() {
  }

  goList () {
    this.$router.navigate( ['list'] );
  }

}
