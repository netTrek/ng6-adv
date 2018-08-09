import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Role } from './role.enum';

@Directive ( {
  selector: '[prRole]'
} )
export class RoleDirective implements OnInit {

  get prRole (): Role {
    return this._prRole;
  }

  @Input ()
  set prRole ( value: Role ) {
    if ( this._prRole !== value ) {
      this._prRole = value;
      if ( this._prRole < 2 ) {
        this.addTemp ();
      } else {
        this.removeTemp ();
      }
    }
  }

  private _prRole: Role;

  constructor ( private readonly viewContainerRef: ViewContainerRef,
                private readonly tempRef: TemplateRef<any> ) {
  }

  ngOnInit (): void {
    console.log ( this.viewContainerRef, this.tempRef );
  }

  private addTemp () {
    if ( this.viewContainerRef.length === 0 ) {
      this.viewContainerRef.createEmbeddedView( this.tempRef, {
        $implicit: 'hello world', role: this.prRole
      } );
    }
  }

  private removeTemp () {
    if ( this.viewContainerRef.length > 0 ) {
      this.viewContainerRef.clear();
    }
  }
}
