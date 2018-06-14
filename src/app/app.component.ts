import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { Role } from './dynamic/role.enum';

@Component ( {
  selector   : 'post-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AppComponent implements OnInit {

  title = 'post';
  crrRole: Role = Role.USER;

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
