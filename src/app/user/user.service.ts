import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  users: BehaviorSubject<User[]> = new BehaviorSubject( [] );

  constructor ( private $http: HttpClient ) {
    this.getUsers ();
  }

  getUsers (): Promise<User[]> {
    return this.$http.get<User[]> ( 'http://localhost:3000/users' )
               .pipe(
                    tap ( userlist => this.users.next( userlist )  )
               )
               .toPromise ();
  }

  addUser ( user: User ): Promise<User> {
    return this.$http.post<User> ( 'http://localhost:3000/users', user )
               .pipe(
                 tap ( next => this.getUsers()  )
               )
               .toPromise ();
  }

  editUser ( user: User ): Promise<User> {
    return this.$http.put<User> ( 'http://localhost:3000/users/' + user.id,
      user )
               .pipe(
                 tap ( next => this.getUsers()  )
               )
               .toPromise ();
  }

  deleteUser ( user: User ): Promise<any> {
    return this.$http.delete<any> ( 'http://localhost:3000/users/' + user.id )
               .pipe(
                 tap ( next => this.getUsers()  )
               )
               .toPromise ();
  }
}
