import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  users$: BehaviorSubject<User[]> = new BehaviorSubject ( [] );

  selectedUser: User;

  readonly endpoint = 'http://localhost:3000/users';

  constructor( private $http: HttpClient ) {
    this.getUsers();
  }

  getUsers(): Observable<User[]> {
    this.$http.get<User[]> ( this.endpoint )
        .subscribe ( receivedUserList => this.users$.next ( receivedUserList ) );
    return this.users$;
  }

  getUserById( id: number ): Promise<User> {
    return this.$http.get<User> ( `${this.endpoint}/${id}` )
      .toPromise();
  }

  addUser( user: User ): Promise<User> {
    return this.$http.post<User>( this.endpoint, user )
      .pipe(
        tap( createdUSer => this.getUsers() )
      ).toPromise();
  }

  delUser( user: User ) {
    this.$http.delete( `${this.endpoint}/${user.id}` )
      .pipe(
        tap( createdUSer => this.getUsers() )
      ).toPromise();
  }
}
