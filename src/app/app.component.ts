import { Component, Inject, Optional } from '@angular/core';
import { MyStorageService } from './service-samples/my-storage.service';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';
import { MyStorageKey } from './service-samples/my-storage.enum';
import { SAMPLE_CLASS, SAMPLE_EXISTING, SAMPLE_FACTORY, SAMPLE_MULTI_VALUE, SAMPLE_VALUE } from './token/injectionToken';
import { MyInjectedClass } from './app.module';
import { PROLEIT_DEBUGGING, PROLEIT_ENDPOINT } from './proleit/proleit.module';

@Component({
  selector: 'pl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proleit2019';
  constructor ( myStorage: MyStorageService,
                @Inject( SAMPLE_VALUE ) wertFuerSaban: string,
                @Inject( SAMPLE_MULTI_VALUE ) multi: string[],
                @Inject( SAMPLE_CLASS ) classVal: MyInjectedClass,
                @Inject( SAMPLE_EXISTING ) existing: string,
                @Inject( SAMPLE_FACTORY ) factory: string,
                @Inject( PROLEIT_ENDPOINT ) endpoint: string,
                @Optional() @Inject( PROLEIT_DEBUGGING ) debug: boolean
  ) {
    // console.log ( environment.endpoint );
    console.log ( debug, endpoint, wertFuerSaban, existing, multi, classVal, factory );
    interval( 500 ).pipe( first() ).subscribe(
      next => {
        myStorage.chgValue( 'Geändert aus App Component');
      }
    );

    myStorage.get(MyStorageKey.MY_VALUE).subscribe(
      next => console.log ( 'wert von value geändert in ', next )
    );
  }
}
