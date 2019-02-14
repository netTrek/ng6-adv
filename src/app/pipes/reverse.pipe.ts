import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'rxjs/internal-compatibility';

@Pipe ( {
  name: 'reverse'
} )
export class ReversePipe implements PipeTransform {

  transform( value: any[] | string, length: number =  Number.MAX_VALUE ): any[] | string {
    if ( isArray ( value ) ) {
      return value.reverse().splice( 0, length );
    } else if ( typeof value === 'string' ) {
      return value.split('').reverse()
                  .splice( 0, length ).join('');
    }
    return value;
  }

}
