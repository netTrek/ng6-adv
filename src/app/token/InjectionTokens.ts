import { InjectionToken } from '@angular/core';

export const USE_ME: InjectionToken<string> = new InjectionToken<string> ( 'useMe' );

export const MY_LIST: InjectionToken<string> = new InjectionToken<string> ( 'myList' );

export const MY_CLASS: InjectionToken<string> = new InjectionToken<string> ( 'myClass' );

export const MY_EX: InjectionToken<string> = new InjectionToken<string> ( 'myEx' );

export const MY_FACTORY: InjectionToken<string> = new InjectionToken<string> ( 'myFactory' );
