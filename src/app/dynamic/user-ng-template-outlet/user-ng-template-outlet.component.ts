import { AfterViewInit, Component, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'post-user-ng-template-outlet',
  templateUrl: './user-ng-template-outlet.component.html',
  styleUrls: ['./user-ng-template-outlet.component.scss']
})
export class UserNgTemplateOutletComponent implements OnInit, AfterViewInit {

  @ViewChild( TemplateRef )
  tempRef: TemplateRef<HTMLHRElement>;

  @ViewChild( 'saban', {read: TemplateRef} )
  tempRef2: TemplateRef<any>;

  constructor( private viewContainerRef: ViewContainerRef ) { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {

    const embeddedViewRef: EmbeddedViewRef<HTMLHRElement>  =
            this.viewContainerRef.createEmbeddedView ( this.tempRef );

    const embeddedViewRef2: EmbeddedViewRef<HTMLHRElement> =
            this.tempRef2.createEmbeddedView( null );
    this.viewContainerRef.insert( embeddedViewRef2 );


    console.log ( this.viewContainerRef, this.tempRef );
  }

}
