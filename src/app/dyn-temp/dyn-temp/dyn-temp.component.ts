import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'pr-dyn-temp',
  templateUrl: './dyn-temp.component.html',
  styleUrls: ['./dyn-temp.component.scss']
})
export class DynTempComponent implements OnInit, AfterViewInit {

  @ViewChild( TemplateRef )
  tempRef: TemplateRef<HTMLHRElement>;

  constructor( private viewContainerRef: ViewContainerRef ) { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    this.viewContainerRef.createEmbeddedView( this.tempRef );
  }

}
