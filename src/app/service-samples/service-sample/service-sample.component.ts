import { Component, OnInit } from '@angular/core';
import { MyStorageService } from '../my-storage.service';
import { MyStorageKey } from '../my-storage.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'pl-service-sample',
  templateUrl: './service-sample.component.html',
  styleUrls: ['./service-sample.component.scss']
})
export class ServiceSampleComponent implements OnInit {
  value: Observable<string>;

  constructor( public myStorage: MyStorageService ) {
    this.value = myStorage.get<string>( MyStorageKey.MY_VALUE);
  }

  ngOnInit() {
  }

}
