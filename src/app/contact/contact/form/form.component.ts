import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  defaultMail = 'us@netTrek.de';

  myInput: HTMLInputElement;

  // @ViewChild ('myInput')
  // private myInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    // this.myInput = this.myInputRef.nativeElement;
  }

}
