import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';

// ng generate directive
//    utils/dangerBtn
//        --spec false
//        --export true
//        --module utils

@Directive ( {
  selector: '[prDangerBtn]'
} )
export class DangerBtnDirective implements OnInit {

  @Output ()
  confirmed: EventEmitter<any> = new EventEmitter<any>();

  @Output ()
  abort: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  confirmMsg = 'Do confirm';

  constructor ( private elemRef: ElementRef, private renderer: Renderer2 ) {
    console.log ( elemRef.nativeElement );
  }

  @HostListener ('click', ['$event'])
  private clickHandler ( evt: MouseEvent ) {
    if ( window.confirm( this.confirmMsg ) ) {
      this.confirmed.emit();
    } else {
      this.abort.emit();
    }
  }

  ngOnInit (): void {
    this.renderer.setStyle ( this.elemRef.nativeElement, 'border-color', 'red' );
    this.renderer.setStyle ( this.elemRef.nativeElement, 'background-color', 'lightcoral' );
    this.renderer.setStyle ( this.elemRef.nativeElement, 'font-size', '12px' );
    this.renderer.setStyle ( this.elemRef.nativeElement, 'font-weight', 'bold' );
  }

}
