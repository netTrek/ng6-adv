import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Role } from './role.enum';

@Directive ( {
  selector: '[postRole]'
} )
export class RoleDirective {

  get postRole (): string {
    return this._postRole;
  }

  @Input ()
  set postRole ( value: string ) {
    if ( this._postRole !== value ) {
      this._postRole = value;
      this.updateView ();
    }

  }

  private _postRole: string;
  private _onStage = false;

  constructor ( private viewContainerRef: ViewContainerRef,
                private tempRef: TemplateRef<any> ) {
  }

  private updateView () {
    if ( this.postRole === Role.ADMIN ) {
      this.add();
    } else {
      this.remove();
    }
  }

  private add () {
    if ( !this._onStage ) {
      this.viewContainerRef.createEmbeddedView( this.tempRef );
      this._onStage = true;
    }
  }

  private remove () {
    if ( this._onStage ) {
      this.viewContainerRef.clear();
      this._onStage = false;
    }
  }
}
