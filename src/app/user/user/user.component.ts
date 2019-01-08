import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector   : 'pl-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {

  color = 'red';
  name = 'Saban Ünlü';
  imgFile = 'cat.jpg';
  width = 25;

  html = `<strong>hello</strong> world
<ul>
<li>123</li>
<script>alert('hello world');</script>
</ul>`;
  private intervalID: number;

  constructor () {
  }

  ngOnInit () {
  }

  getName (): string {
    return this.name;
  }

  chgName () {
    this.name = 'Peter Müller';
  }

  chgColor () {
    this.color = 'blue';
  }
}
