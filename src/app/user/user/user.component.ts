import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pr-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {

  title = 'Herr';

  constructor () {
  }

  ngOnInit () {
  }

  getTitleWithDate ( prefix: string = '' ): string {
    return prefix + this.title + Date.now();
  }

}
