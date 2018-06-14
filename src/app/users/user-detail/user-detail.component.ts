import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'post-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id: number;
  user: User;

  constructor( private $route: ActivatedRoute, private $user: UserService) { }

  ngOnInit() {
    this.$route.paramMap.pipe(
      map<ParamMap, number>( paramMap => Number (paramMap.get ('id') ) )
    ).subscribe( n => {
      this.id = n;
      this.$user.getUserById( this.id )
        .subscribe( usr => {
          this.user = usr;
        } );
    } );
  }

}
