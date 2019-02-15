import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  users$: BehaviorSubject<User[]> = new BehaviorSubject ( [] );

  selectedUser: User;

  constructor( private $http: HttpClient ) {
    this.getUsers();
  }

  getUsers(): Observable<User[]> {
    this.$http.get<User[]> ( 'http://localhost:3000/users' )
        .subscribe ( receivedUserList => this.users$.next ( receivedUserList ) );
    return this.users$;
  }
}
