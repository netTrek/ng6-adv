import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// const myVar = 123;
@Component ( {
  selector : 'pl-user',
  // encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './user.component.html',
  // template : `<h1>hello world</h1>
  // <ul>
  //   <li>${myVar}</li>
  //   <li>2</li>
  //   <li>3</li>
  // </ul>
  // `,
  styleUrls: [ './user.component.scss' ]
  // styles: [
  //   `h1 {
  //     background-color: #ccc;
  //     color: #f00;
  //   }`
  // ]
} )
export class UserComponent implements OnInit {

  constructor () {
  }

  ngOnInit () {
  }

}
