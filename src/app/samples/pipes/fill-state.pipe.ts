import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillState'
})
export class FillStatePipe implements PipeTransform {

  transform(inputBar: number, norm: number = 0): any {
    return Math.round ( ( inputBar - norm ) * 100 ) ;
  }

}
