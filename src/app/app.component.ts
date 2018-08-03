import { Component, HostBinding, HostListener } from '@angular/core';

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
}
