import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

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


  userList$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(  [
    {
      'id'       : 1,
      'firstname': 'saban',
      'lastname' : 'ünlü',
      'birthday' : '1973-11-04'
    },
    {
      'id'       : 2,
      'firstname': 'peter',
      'lastname' : 'müller',
      'birthday' : '1973-11-04'
    },
    {
      'id'       : 3,
      'firstname': 'franz',
      'lastname' : 'maier',
      'birthday' : '1973-11-04'
    }
  ]);

  set userList ( index: User[] ) {
    this.userList$.next( index );
  }

  get userList (): User[] {
    return this.userList$.getValue();
  }


  constructor () {
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
