import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'post-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: number;

  constructor( private $route: ActivatedRoute ) { }

  ngOnInit() {
    this.$route.paramMap.pipe(
      map<ParamMap, number>( x => Number (x.get ('id') ) )
    ).subscribe( n => this.id = n );
  }

}
