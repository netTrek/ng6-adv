import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive ( {
  selector: 'button[msgDangerBtn]'
} )
export class DangerBtnDirective {

  @Input()
  msgDangerBtn: string;

  @Output ()
  confirmed: EventEmitter<any> = new EventEmitter ();

  constructor( private elemRef: ElementRef, private renderer: Renderer2 ) {
    // console.log ( 'msgDangerBtn', this.elemRef.nativeElement );
    this.initStyles ();
  }

  private initStyles() {
    this.renderer.setStyle ( this.elemRef.nativeElement, 'backgroundColor', 'red' );
    this.renderer.setStyle ( this.elemRef.nativeElement, 'fontWeight', 'bold' );
    this.renderer.setStyle ( this.elemRef.nativeElement, 'fontSize', 'large' );
  }

  @HostListener ( 'click', ['$event'] )
  private onClick( mouseEvent: MouseEvent ) {
    let msg = 'achtung....';
    if ( this.msgDangerBtn.trim() !== '' ) {
      msg = this.msgDangerBtn;
    }
    if ( confirm ( msg ) ) {
      this.confirmed.emit ();
      // mouseEvent.stopImmediatePropagation();
    }
  }

}
