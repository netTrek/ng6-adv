/**
 * File created by suenlue on 09.01.19.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */
import { BehaviorSubject, Observable } from 'rxjs';
import { MyStorage } from './my-storage';
import { MyStorageKey } from './my-storage.enum';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable( {providedIn: 'root'})
export class MyStorageService extends BehaviorSubject<MyStorage> {

  constructor () {
    super ( {myValue: 'Wert', num: 123} );
    console.log ( 'constructor of MyStorageService' );
  }

  chgValue ( newVal: string ) {
    //
    // const crrStateClone = {...this.getValue() };
    // crrStateClone.myValue = newVal;
    // this.next( crrStateClone );
    //
    this.next(
      {...this.getValue(), myValue: newVal}
    );
  }

  get<T> (key: MyStorageKey ): Observable<T> {
    return this.pipe(
      map( value => value[key as string]),
      distinctUntilChanged()
    );
  }
}
