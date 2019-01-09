import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any[]|string, args?: any): any[]|string {

    if ( typeof value === 'string' ) {
      return value.split( '' )
                  .reverse()
                  .join( '' );
    } else if ( isArray(value) ) {
      return [...value].reverse();
    }
    return value;
  }

}
