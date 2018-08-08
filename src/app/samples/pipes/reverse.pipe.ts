import { Inject, LOCALE_ID, Optional, Pipe, PipeTransform } from '@angular/core';
import { MY_CLASS, MY_EX, MY_FACTORY, MY_LIST, MyClass, USE_ME } from '../../app.module';
import { A_NAME, FUN_TOKEN } from '../../my-frame-work/my-frame-work.module';

let counter = 0;

@Pipe({
  name: 'reverse',
  pure: true  // default true ==> Singleton d.h. ausführung nur wenn eingangsdaten sich ändern. false macht Sinn, bei async Prozessen
})
export class ReversePipe implements PipeTransform {

  constructor (
    @Inject(LOCALE_ID) crrLng: string,
    @Inject( USE_ME ) useMe: string,
    @Inject( MY_LIST ) myList: string[],
    @Inject( MY_CLASS ) myClassIOnstance: MyClass,
    @Inject( MY_EX ) useEx: string,
    @Inject( MY_FACTORY ) useFac: string,
    @Inject( FUN_TOKEN ) fun: string,
    @Optional() @Inject( A_NAME ) aName: string
  ) {
    console.warn ( ++counter, crrLng, useMe, myList, myClassIOnstance, useEx, useFac, fun, aName );
  }

  transform( value: boolean | string | any[] ): boolean | string | any[] {
    if ( typeof value === 'string' ) {
      return value.split('').reverse().join('');
    } else if ( typeof value === 'boolean' ) {
      return !value;
    }
    return value.reverse();
  }

}
