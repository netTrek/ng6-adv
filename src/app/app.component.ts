import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component ( {
  selector   : 'post-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'post';

  constructor () {
    console.log ( environment.endpoint );
  }
}
