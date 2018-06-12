import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Component ( {
  selector   : 'post-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {
  title = 'post';

  constructor ( private swUpdate: SwUpdate ) {
    console.log ( environment.endpoint );
  }

  ngOnInit (): void {

    if ( this.swUpdate.isEnabled ) {

      this.swUpdate.available.subscribe (
        event => {
          if ( confirm('New version available, should I load?') ) {
            this.swUpdate.activateUpdate()
              .then( () => {
                document.location.reload();
              });
          }
        }
      );

      this.swUpdate.checkForUpdate();
      interval( 5000 )
        .subscribe( () => {
          this.swUpdate.checkForUpdate();
        });
    }

  }
}
