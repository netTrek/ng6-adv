import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvz-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  width = 50;

  imgUrl = 'http://placekitten.com/32/32';
  altDesc = 'cat';

  constructor() { }

  ngOnInit() {
  }

}
