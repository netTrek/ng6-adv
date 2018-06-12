import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { User } from './user';
// import { do } from 'rxjs/add/operator/do';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]> ( [] );

  readonly endpoint = 'http://localhost:3000/users';

  constructor ( private $http: HttpClient ) {
  }

  getUserList (): Observable<User[]> {
    return this.$http.get<User[]> ( this.endpoint )
               .pipe (
                 tap ( val => this.users$.next ( val ) )
               );
  }

  getUserById ( id: number ): Observable<User> {
    return this.$http.get<User> ( `${this.endpoint}/${id}` );
  }

  create ( user: User ): Observable<User> {
    return this.$http.post<User> ( this.endpoint, user )
               .pipe(
                 tap ( usr => {
                   const userList = this.users$.getValue();
                   this.users$.next( [ ...userList, usr ] );
                 })
               );
  }

  delUser ( usr: User): Observable<any> {
    return this.$http.delete<any> ( `${this.endpoint}/${usr.id}` )
               .pipe(
                 tap ( () => {
                   const userList = [ ... this.users$.getValue()];
                   const index = userList.indexOf( usr );
                   if ( index !== -1 ) {
                     userList.splice( index, 1 );
                   }
                   this.users$.next( userList );
                 })
               );
  }


}
