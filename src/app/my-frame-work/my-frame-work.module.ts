import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const FUN_TOKEN: InjectionToken<string> = new InjectionToken ( 'fun' );

export const A_NAME: InjectionToken<string> = new InjectionToken ( 'aName' );

@NgModule ( {
  imports     : [
    CommonModule
  ],
  providers   : [ { provide: FUN_TOKEN, useValue: 'have fun' } ],
  declarations: []
} )
export class MyFrameWorkModule {
  static forRoot ( config: { name: string, fun: string } ): ModuleWithProviders<MyFrameWorkModule> {
    return {
      ngModule : MyFrameWorkModule,
      providers: [
        { provide: A_NAME, useValue: config.name },
        { provide: FUN_TOKEN, useValue: config.fun }
      ]
    };
  }
}
