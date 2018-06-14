import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ComService {

  value$: BehaviorSubject<any> = new BehaviorSubject<any>( 'hello wolrd');

  constructor() { }

}
