import { AfterViewInit, Component, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { embeddedViewEnd } from '@angular/core/src/render3/instructions';

@Component ( {
  selector   : 'post-use-temp-outlet',
  templateUrl: './use-temp-outlet.component.html',
  styleUrls  : [ './use-temp-outlet.component.scss' ]
} )
export class UseTempOutletComponent implements OnInit, AfterViewInit {

  @ViewChild ( TemplateRef )
  hrRef: TemplateRef<HTMLHRElement>;

  @ViewChild ( 'hr', { read: TemplateRef } )
  hrRef2: TemplateRef<HTMLHRElement>;

  @ViewChild ( 'hr', { read: ViewContainerRef } )
  internalViewContainerRef: ViewContainerRef;

  constructor ( private viewContainerRef: ViewContainerRef ) {
  }

  ngOnInit () {
  }

  ngAfterViewInit (): void {
    console.log ( this.hrRef, this.hrRef2 );
    console.log ( this.hrRef === this.hrRef2 ); // true
    const embeddedViewRef: EmbeddedViewRef<HTMLHRElement> =
            this.viewContainerRef.createEmbeddedView(
              this.hrRef
            );
    const embeddedViewRef2: EmbeddedViewRef<HTMLHRElement> =
            this.internalViewContainerRef.createEmbeddedView(
              this.hrRef
            );

  }

}
