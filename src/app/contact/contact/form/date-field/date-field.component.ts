import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'pl-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss']
})
export class DateFieldComponent implements OnInit {

  @Output()
  focus: EventEmitter<FocusEvent> = new EventEmitter();

  @ViewChild ('inputField')
  inputField: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
