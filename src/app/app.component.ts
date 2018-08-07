import { Component, HostBinding, HostListener } from '@angular/core';
import { UserService } from './user/user.service';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { ReqCountService } from './interceptors/req-count.service';

@Component ( {
  selector   : 'pr-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'proleit';

  @HostBinding ( 'class.mobile' )
  mobile = false;

  @HostListener ( 'window:resize', [ '$event' ] )
  resize ( evt: Event ) {
    // console.log ( 'resize', evt );
    this.mobile = window.innerWidth < 321;
  }

  constructor ( $user: UserService, public $reqCounter: ReqCountService ) {
    $user.selectedUsr$.subscribe(
      next => {
        if ( !! next ) {
          console.log ( 'user selected', next );
        } else {
          console.log ( 'user not or unselected' );
        }
      }
    );

    // interval( 1000 ).pipe( take( 3 ) ).subscribe(
    //   next => {
    //     $user.addUser( {
    //       birthday: '11.11.11',
    //       firstname: `${next} firstnamae`,
    //       lastname: `${next} lastname`
    //     });
    //   }
    // );
  }
}
