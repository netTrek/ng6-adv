import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component ( {
  selector   : 'pl-home',
  templateUrl: './home.component.html',
  styleUrls  : [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

  constructor ( private $router: Router ) {
  }

  ngOnInit () {
  }

  go2Users () {
    this.$router.navigate( ['users'] );
  }
}
