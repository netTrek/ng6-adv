import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[dvzDangerBtn]'
})
export class DangerBtnDirective implements AfterViewInit {

  @Input()
  dvzDangerBtn: string;

  @Output()
  confirmed: EventEmitter<any> = new EventEmitter();

  private elem: HTMLButtonElement;

  constructor( elemRef: ElementRef, private renderer: Renderer2 ) {
    this.elem = elemRef.nativeElement as HTMLButtonElement;
  }

  ngAfterViewInit (): void {
    this.renderer.setStyle( this.elem, 'backgroundColor', 'red' );
    this.renderer.setStyle( this.elem, 'fontWeight', 'bold' );
    this.renderer.setStyle( this.elem, 'fontSize', 'large' );
  }

  @HostListener('click', ['$event'])
  private confirm ( event?: any ) {
    let msg = 'Bist du sicher';
    if ( !!this.dvzDangerBtn && this.dvzDangerBtn !== '' ) {
      msg = this.dvzDangerBtn;
    }
    if ( window.confirm( msg ) ) {
      this.confirmed.emit( event );
    }
  }
}
