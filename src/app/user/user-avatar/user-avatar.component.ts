import { Component, OnInit } from '@angular/core';

export class Saban {
  val = Math.floor( Math.random() * 1000 );
}
@Component({
  selector: 'dvz-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  providers: [Saban]
})
export class UserAvatarComponent implements OnInit {

  val = 'saban';

  constructor( private saban: Saban ) {
    this.val = saban.val + '';
  }

  ngOnInit() {
  }

}
