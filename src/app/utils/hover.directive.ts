import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[plHover]'
})
export class HoverDirective {

  @Input()
  plHover: string;

  private elem: HTMLElement;

  @HostBinding ('style.color')
  private color: null|string|number;

  constructor( /*elem: ElementRef, private renderer: Renderer2*/ ) {
    // console.log ('constructor HoverDirective', elem);
    //
    // this.elem = elem.nativeElement as HTMLElement;
    // this.addListener();
  }

  @HostListener( 'mouseenter')
  private mouseenter () {
    if ( this.plHover !== '' ) {
      this.color = this.plHover;
    } else {
      this.color = 'red';
    }
  }

  @HostListener( 'mouseleave')
  private mouseleave () {
    this.color = null;
  }

  // private addListener () {
  //   this.elem.addEventListener( 'mouseenter', () => {
  //     this.renderer.setStyle( this.elem, 'color', 'red' );
  //   });
  //   this.elem.addEventListener( 'mouseleave', () => {
  //     this.renderer.setStyle( this.elem, 'color', null );
  //   });
  // }
}
