import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: 'button[dvzDangerBtn]'
})
export class DangerBtnDirective implements AfterViewInit, OnChanges {

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


  ngOnChanges ( changes: SimpleChanges ): void {
    if ( changes.hasOwnProperty('dvzDangerBtn') ) {
      this.renderer.setProperty( this.elem, 'innerText', this.dvzDangerBtn );
    }
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
