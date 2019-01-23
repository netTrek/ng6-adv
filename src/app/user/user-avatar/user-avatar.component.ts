import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvz-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
  <script>alert ('hello')</script>
  <strong>ab aperiam asperiores atque consectetur culpa, dolorum ducimus error esse est facilis fuga </strong>
  fugiat iure magnam magni, reprehenderit sapiente tempore voluptatibus!`;

  imgUrl = 'http://placekitten.com/32/32';
  imgFile = 'logo.jpg';
  altDesc = 'cat';

  constructor() { }

  ngOnInit() {
  }

  chgImg ( msg: string, event: MouseEvent ) {
    debugger
    this.altDesc = 'netTrek';
    this.imgUrl = './assets/img/logo.jpg';
  }

}
