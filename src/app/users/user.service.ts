import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  readonly endpoint: string = environment.endpoint;

  users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]> ( [] );

  constructor ( private $http: HttpClient ) {
    this.getUserList ().subscribe();
  }

  create ( user: User ): Observable<User> {
    return this.$http.post<User> ( this.endpoint, user )
               .pipe (
                 tap ( n => this.users$.next( [ ...this.users$.getValue(), n] ) /*this.getUserList().subscribe()*/ )
               );
  }

  deleteUsr ( user: User ): Observable<any> {
    return this.$http.delete<any> ( this.endpoint + '/' + user.id )
               .pipe (
                 tap ( n => {
                   const crrList = this.users$.getValue();
                   const index = crrList.indexOf( user );
                   if ( index !== -1 ) {
                     crrList.splice( index, 1 );
                     this.users$.next( [...crrList] );
                   }
                   /*this.getUserList().subscribe()*/
                 } )
               );
  }

  getUserById ( id: number ): Observable<User> {
    return this.$http.get<User> ( this.endpoint + '/' + id )
               .pipe (
                 tap ( n => console.log ( n ) )
               );
  }

  getUserList (): Observable<User[]> {
    return this.$http.get<User[]> ( this.endpoint )
               .pipe (
                 tap ( n => this.users$.next ( n ) )
               );
  }

}
