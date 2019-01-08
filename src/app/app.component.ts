import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'pl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proleit2019';
  constructor () {
    console.log ( environment.endpoint );
  }
}
