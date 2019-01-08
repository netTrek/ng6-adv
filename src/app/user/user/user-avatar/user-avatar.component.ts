import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pl-user-avatar',
  // encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
