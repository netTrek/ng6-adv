import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'pr-dyn-temp',
  templateUrl: './dyn-temp.component.html',
  styleUrls: ['./dyn-temp.component.scss']
})
export class DynTempComponent implements OnInit, AfterViewInit {

  myContext = { $implicit: 123, car: 'BMW' };
  crrRole = 0;

  @ViewChild( TemplateRef )
  tempRef: TemplateRef<any>;

  constructor( private viewContainerRef: ViewContainerRef ) { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    setTimeout ( () => {
      this.viewContainerRef.createEmbeddedView( this.tempRef, this.myContext );
    }, 1);
  }

}
