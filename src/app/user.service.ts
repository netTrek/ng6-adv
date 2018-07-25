import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[];

  constructor( private $http: HttpClient ) { }

  getUsers () {
    this.$http.get<User[]>( `${environment.endpoint}/users` )
        .subscribe( users => this.users = users );
  }
}
