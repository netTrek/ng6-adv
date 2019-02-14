import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// ng g c user/user --export --skip-test

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  // template: '<h1>userinline</h1>',
  styleUrls: ['./user.component.scss']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
