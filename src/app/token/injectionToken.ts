/**
 * File created by suenlue on 09.01.19.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */
import { InjectionToken } from '@angular/core';
import { MyInjectedClass } from '../app.module';

export const SAMPLE_VALUE: InjectionToken<string> = new InjectionToken( 'SAMPLE_VALUE' );
export const SAMPLE_MULTI_VALUE: InjectionToken<string> = new InjectionToken( 'SAMPLE_MULTI_VALUE' );
export const SAMPLE_CLASS: InjectionToken<MyInjectedClass> = new InjectionToken( 'SAMPLE_CLASS' );
export const SAMPLE_EXISTING: InjectionToken<string> = new InjectionToken( 'SAMPLE_EXISTING' );
export const SAMPLE_FACTORY: InjectionToken<string> = new InjectionToken( 'SAMPLE_FACTORY' );


