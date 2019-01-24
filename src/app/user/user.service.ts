import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [
    { firstname: 'saban', lastname: 'uenlue' },
    { firstname: 'peter', lastname: 'müller' }
  ];
  selectedUser: User;

  constructor( private $http: HttpClient ) {
    this.getUsers ();
  }


  private getUsers (): Promise<User[]> {
    return this.$http.get<User[]>( environment.endpoint )
               .pipe(
                 tap( next => {
                   this.userList = next;
                   if ( !! this.selectedUser ) {
                    this.selectedUser = this.userList.find( value => value.id === this.selectedUser.id );
                   }
                 } )
               )
               .toPromise();
  }

  private getUserByID ( id ): Promise<User> {
    return this.$http.get<User>( environment.endpoint + '/' + id  )
               .toPromise();
  }

  private delUserByID ( id ): Promise<any> {
    return this.$http.delete<any>( environment.endpoint + '/' + id  )
               .pipe(
                 tap( next => this.getUsers() )
               )
               .toPromise();
  }

  private updateUser ( user: User ): Promise<User> {
    return this.$http.put<User>( environment.endpoint + '/' + user.id, user  )
               .pipe(
                 tap( next => this.getUsers() )
               )
               .toPromise();
  }

  setSelectedUser ( user: User ) {
    if ( user === this.selectedUser ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  addUser ( user?: User ): Promise<User> {
    const rnd = Math.floor ( Math.random () * 1000 );
    user = user ||
      { firstname: 'Hans' + rnd, lastname: 'Mustermann' + rnd };
    return this.$http.post<User>(
                  environment.endpoint,
                  user )
               .pipe(
                 tap ( next => {
                   this.selectedUser = next;
                   this.getUsers();
                 } )
               )
      .toPromise()
      ;
  }

  removeSelectedUser () {
    this.delUserByID ( this.selectedUser.id );
    this.selectedUser = undefined;
  }

}
