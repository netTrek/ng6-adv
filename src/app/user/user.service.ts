import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  readonly endpoint = 'http://localhost:3000/users/';

  selectedIndex$: BehaviorSubject<number> = new BehaviorSubject<number>( -1 );

  set selectedIndex ( index: number ) {
    this.selectedIndex$.next( index );
  }

  get selectedIndex (): number {
    return this.selectedIndex$.getValue();
  }

  selectedUsr$: BehaviorSubject<User> = new BehaviorSubject<User>( undefined );

  set selectedUsr ( index: User ) {
    this.selectedUsr$.next( index );
  }

  get selectedUsr (): User {
    return this.selectedUsr$.getValue();
  }


  userList$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(  []);

  set userList ( index: User[] ) {
    this.userList$.next( index );
  }

  get userList (): User[] {
    return this.userList$.getValue();
  }


  constructor ( private $http: HttpClient) {
    this.getUserList();
  }

  getUserList (): Promise<User[]> {
    return this.$http.get<User[]>( this.endpoint )
        .pipe(
          tap( next => this.userList$.next( next ))
        )
        .toPromise();
  }

  selectNextUsr () {
    if ( this.selectedIndex + 1 === this.userList.length ) {
      this.selectedIndex = 0;
    } else {
      ++ this.selectedIndex;
    }
  }

  setAsSelected ( user: User ) {
    this.selectedUsr   = user;
    this.selectedIndex = this.userList.indexOf ( this.selectedUsr );
  }

  selectIndex ( ind: number, $event: MouseEvent ) {
    this.selectedIndex = ind;
  }

  addUser ( user: User ) {
    this.userList$.next( [ ...this.userList, user ] );
    this.selectedUsr   = user;
    this.selectedIndex = this.userList.length - 1;
  }

  delUsr ( user: User ) {
    this.userList.splice ( this.userList.indexOf ( user ), 1 );
    this.userList$.next( [ ...this.userList ] );
    this.selectedUsr   = undefined;
    this.selectedIndex = - 1;
  }
}
