import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { s } from '@angular/core/src/render3';

@Component({
  selector: 'post-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  name: string;

  @Output()
  select: EventEmitter<string> = new EventEmitter();

  constructor() { }

  @HostListener( 'click' )
  emitEvent () {
    this.select.next( this.name );
  }

  ngOnInit() {
  }

}
