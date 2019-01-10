import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const PROLEIT_ENDPOINT: InjectionToken<string> = new InjectionToken( 'proleitEndpoint');
export const PROLEIT_DEBUGGING: InjectionToken<boolean> = new InjectionToken( 'proleitDebugging');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: PROLEIT_ENDPOINT, useValue: 'http://proleit' }
  ]
})
export class ProleitModule {
  static forRoot ( config: { debug: boolean } ): ModuleWithProviders {
    return {
      ngModule: ProleitModule,
      providers: [
        {provide: PROLEIT_DEBUGGING, useValue: config.debug }
      ]
    };
  }
}
