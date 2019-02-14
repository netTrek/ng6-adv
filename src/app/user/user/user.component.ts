import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user';

// ng g c user/user --export --skip-test

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  // template: '<h1>userinline</h1>',
  styleUrls: ['./user.component.scss']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
