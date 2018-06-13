import { AfterContentInit, Component, ContentChild, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TempTargetDirective } from '../temp-target.directive';

export class MyContext {
  constructor ( public value: any ) {}
}

@Component({
  selector: 'post-gen-via-temp-dir',
  templateUrl: './gen-via-temp-dir.component.html',
  styleUrls: ['./gen-via-temp-dir.component.scss']
})
export class GenViaTempDirComponent implements OnInit, AfterContentInit {

  @Input()
  dataProvider: any[];

  @ContentChild (TempTargetDirective, {read: TemplateRef})
  tempRef: TemplateRef<any>;

  constructor( private viewContainerRef: ViewContainerRef ) { }

  ngOnInit() {
    console.log ( this.tempRef, this.viewContainerRef );
    this.dataProvider.forEach( (value => {
      this.viewContainerRef.createEmbeddedView( this.tempRef, new MyContext( value ) );
    }));
  }

  ngAfterContentInit (): void {
  }

}
