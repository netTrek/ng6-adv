import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform( value: boolean | string | any[] ): boolean | string | any[] {
    if ( typeof value === 'string' ) {
      return value.split('').reverse().join('');
    } else if ( typeof value === 'boolean' ) {
      return !value;
    }
    return value.reverse();
  }

}
