import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../user';

@Component({
  selector: 'post-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id: number;
  user: User;

  constructor( private $route: ActivatedRoute) { }

  ngOnInit() {

    this.$route.data
        .pipe(
          map<Data, User> ( data => data.user )
        )
        .subscribe( user => this.user = user );

    this.$route.paramMap.pipe(
      map<ParamMap, number>( paramMap => Number (paramMap.get ('id') ) )
    ).subscribe( n => {
      this.id = n;
    } );
  }

}
