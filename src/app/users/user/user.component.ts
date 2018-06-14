import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'post-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  constructor( public $user: UserService ) {}

  ngOnInit() {
    this.$user.getUserById( 111 ).subscribe();

    const list = [1, 2, 3 ];
    const result = list.concat( list, [4]); // 1,2,3,4 => [1,2,3] + [4]

    const obj = { a: 1, b: 2, c: {d: 4} };
    const objClone = { ...obj};
    const objMod = { ...obj, a: 3 };

  }

  ngOnDestroy (): void {
  }

  createNewUser () {
    this.$user.create( <User>{
      firstname: '2323222',
      lastname: '2323222',
      birthday: '2222'
    }).subscribe();
  }

  deleteUser ( user: User ) {
    this.$user.deleteUsr( user ).subscribe();
  }
}
