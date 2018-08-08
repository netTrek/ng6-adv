import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { ReqCountService } from './interceptors/req-count.service';
import { forEach } from '@angular/router/src/utils/collection';
import { routes } from './app-routing.module';
import { Router } from '@angular/router';
import { CountdownComponent } from './utils/countdown/countdown.component';

@Component ( {
  selector   : 'pr-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {
  title = 'proleit';

  @HostBinding ( 'class.mobile' )
  mobile = false;

  myRoutes: string[] = [];

  constructor ( /*$user: UserService,*/
                public $reqCounter: ReqCountService,
                public router: Router
                ) {
    /*
    // Lazy
    $user.selectedUsr$.subscribe(
      next => {
        if ( !! next ) {
          console.log ( 'user selected', next );
        } else {
          console.log ( 'user not or unselected' );
        }
      }
    );
    */

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



  @HostListener ( 'window:resize', [ '$event' ] )
  resize ( evt: Event ) {
    // console.log ( 'resize', evt );
    this.mobile = window.innerWidth < 321;
  }

  ngOnInit (): void {
    routes.forEach( value => {
      if ( value.path !== '' && value.path !== '**' ) {
        this.myRoutes.push( value.path );
      }
    });
    this.myRoutes.push( 'saban' );
    this.router.config.unshift( {
      path: 'saban', component: CountdownComponent
    });
  }
}
