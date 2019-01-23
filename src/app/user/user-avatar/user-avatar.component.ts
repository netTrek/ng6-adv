import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvz-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  val = 'saban';

  constructor() { }

  ngOnInit() {
  }

}
