import { Component, OnInit } from '@angular/core';
import { MyEntryComponent } from '../my-entry/my-entry.component';
import { Type } from '@angular/core/src/type';

@Component({
  selector: 'post-user-ng-component-outlet',
  templateUrl: './user-ng-component-outlet.component.html',
  styleUrls: ['./user-ng-component-outlet.component.scss']
})
export class UserNgComponentOutletComponent implements OnInit {
  dynamicComponentClass: Type<MyEntryComponent> = MyEntryComponent;

  constructor() { }

  ngOnInit() {
  }

}
