import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dvz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private $router: Router ) { }

  ngOnInit() {
  }

  goUser () {
    this.$router.navigate( ['user'] );
  }

}
