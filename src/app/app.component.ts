import { Component } from '@angular/core';
import { MyStorageService } from './service-samples/my-storage.service';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';
import { MyStorageKey } from './service-samples/my-storage.enum';

@Component({
  selector: 'pl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proleit2019';
  constructor ( myStorage: MyStorageService ) {
    // console.log ( environment.endpoint );
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
