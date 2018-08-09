import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, Type, ViewContainerRef } from '@angular/core';
import { DynAComponent } from '../dyn-a/dyn-a.component';
import { DynBComponent } from '../dyn-b/dyn-b.component';

@Component ( {
  selector   : 'pr-dyn-view',
  templateUrl: './dyn-view.component.html',
  styleUrls  : [ './dyn-view.component.scss' ]
} )
export class DynViewComponent implements OnInit {

  compClass: Type<DynAComponent | DynBComponent> = DynAComponent;

  constructor ( private viewContainerRef: ViewContainerRef,
                private compFactoyResolver: ComponentFactoryResolver ) {
  }
  ngOnInit () {
    const compFactory: ComponentFactory<DynAComponent> =
            this.compFactoyResolver.resolveComponentFactory( DynAComponent );

    const compRef: ComponentRef<DynAComponent> =
            this.viewContainerRef.createComponent( compFactory );

    compRef.instance.val = 'angular';
    // compRef.changeDetectorRef.detectChanges();
  }

  toggle () {
    if ( this.compClass === DynAComponent ) {
      this.compClass = DynBComponent;
    } else {
      this.compClass = DynAComponent;
    }
  }

}
