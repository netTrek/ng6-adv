import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'post-gen-dyn',
  templateUrl: './gen-dyn.component.html',
  styleUrls: ['./gen-dyn.component.scss']
})
export class GenDynComponent implements OnInit {

  constructor( private compFactoryResolver: ComponentFactoryResolver,
               private viewContainerRef: ViewContainerRef ) { }

  ngOnInit() {
    const factory: ComponentFactory<DynamicComponent> =
      this.compFactoryResolver.resolveComponentFactory( DynamicComponent );

    const compRef: ComponentRef<DynamicComponent> =
            this.viewContainerRef.createComponent( factory );

    console.log ( compRef, compRef.instance );

    // set Data variable
    compRef.instance.data = 'hello dyn';

  }

}
