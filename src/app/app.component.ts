import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component ( {
  selector   : 'msg-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'msg19';

  constructor() {
    console.log ( environment.endpoint );
  }

  chgTitle() {
    this.title = 'Hello World';
  }
}
