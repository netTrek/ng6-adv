import { AfterContentInit, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { GridDirective } from './grid.directive';

@Component({
  selector: 'pr-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, AfterContentInit {

  @Input()
  dataprovider: any[];

  @ContentChild( GridDirective, {read: TemplateRef} )
  templRef: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit (): void {
    console.log ( this.templRef );
  }

}
