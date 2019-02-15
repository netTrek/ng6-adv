import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { PlayService } from './play.service';

@Component ( {
  selector   : 'msg-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'msg19';

  constructor( public $play: PlayService ) {
    console.log ( environment.endpoint );
  }

  chgTitle() {
    this.title = 'Hello World';
  }
}
