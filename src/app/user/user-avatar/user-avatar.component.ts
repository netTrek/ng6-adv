import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'pr-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit, OnDestroy {

  urls = ['../../../assets/images/batman.png',
          '../../../assets/images/joker.png'];

  url = this.urls [0];

  private intervalID: number;
  private crrImgId = 0;

  constructor() { }

  ngOnInit() {
    this.intervalID = window.setInterval( () => {
      if ( ++ this.crrImgId > 1 ) {
        this.crrImgId = 0;
      }
      this.url = this.urls[ this.crrImgId ];
    }, 1000 );
  }

  ngOnDestroy (): void {
    window.clearInterval( this.intervalID );
    this.intervalID = undefined;
  }

}
