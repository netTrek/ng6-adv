import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

const version = 'v7';

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

  ngOnInit () {

    if ( this.swUpdate.isEnabled ) {

      console.log ( 'avaiable ', version );

      this.swUpdate.available.subscribe ( event => {
        if ( confirm ( 'New version available. Load New Version?' ) ) {
          this.swUpdate.activateUpdate ()
              .then ( () => document.location.reload () );
        }
      } );

      this.swUpdate.activated.subscribe ( event => {
        console.log ( 'old version was', event.previous, version );
        console.log ( 'new version is', event.current, version );
      } );

      this.swUpdate.checkForUpdate ();
      interval ( 5000 )
        .subscribe ( () => {
          console.log ( 'check update', version );
          this.swUpdate.checkForUpdate ().then( value => {
            console.log ( 'checked', version );
          });
        } );
    }
  }

}
