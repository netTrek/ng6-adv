import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dvz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FormComponent implements OnInit, AfterViewInit {
  myInput: HTMLInputElement;

  @ViewChild ('myInput')
  private myInputElem: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    this.myInput = this.myInputElem.nativeElement;
  }

}
