import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string | any[], max?: number ): string | any[] {
    if ( Array.isArray( value )) {
      return value.reverse()
                  .slice( 0, max || Number.MAX_VALUE);
    } else if ( typeof value === 'string' ) {
      return value.split('')
                  .reverse()
                  .slice( 0, max || Number.MAX_VALUE)
                  .join('');
    }
    return value;
  }

}
