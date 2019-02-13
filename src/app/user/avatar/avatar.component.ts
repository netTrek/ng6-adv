import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  eigenschaft = 124;

  constructor() { }

  ngOnInit() {
  }

}
