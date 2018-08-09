import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { retry, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { UserModule } from './user.module';
import { environment } from '../../environments/environment';

// @Injectable ( {
//   providedIn: 'root'
// } )
@Injectable ( {
  providedIn: UserModule
} )
export class UserService {

  readonly endpoint = `${environment.endpoint}/users`; // 'http://localhost:3000/users/';

  selectedIndex$: BehaviorSubject<number> = new BehaviorSubject<number> ( - 1 );

  set selectedIndex ( index: number ) {
    this.selectedIndex$.next ( index );
  }

  get selectedIndex (): number {
    return this.selectedIndex$.getValue ();
  }

  selectedUsr$: BehaviorSubject<User> = new BehaviorSubject<User> ( undefined );

  set selectedUsr ( index: User ) {
    this.selectedUsr$.next ( index );
  }

  get selectedUsr (): User {
    return this.selectedUsr$.getValue ();
  }

  userList$: BehaviorSubject<User[]> = new BehaviorSubject<User[]> ( [] );

  set userList ( index: User[] ) {
    this.userList$.next ( index );
  }

  get userList (): User[] {
    return this.userList$.getValue ();
  }

  constructor ( private $http: HttpClient ) {
    this.getUserList ();
  }

  getUserList (): Promise<User[]> {
    const headers = new HttpHeaders ()
      .set ( 'token', '4711Ünlü' )
    ;
    const params  = new HttpParams ()
      .set ( 'key1', '4711Ünlü' )
      .set ( 'key2', '4711Ünlü' )
    ;
    const option  = {
      headers, params
    };
    return this.$http.get<User[]> ( this.endpoint, option )
               .pipe (
                 tap ( next => this.userList$.next ( next ) )
               )
               .toPromise ();
  }

  getUserById ( id: number ): Promise<User> {
    return this.$http.get<User> ( `${this.endpoint}${id}` )
               .pipe (
                 retry ( 3 ),
                 tap ( next => {
                   let ind = - 1;
                   this.selectedUsr = this.userList.find ( ( value, index ) => {
                     if ( value.id === next.id ) {
                       ind = index;
                       return true;
                     }
                     return false;
                   } );
                   this.selectedIndex$.next ( ind );
                 } )
               )
               .toPromise ();
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

  addUser ( user: User ): Promise<User> {
    delete user.id;
    return this.$http.post<User> ( this.endpoint, user )
               .pipe (
                 tap ( usr => {
                   // this.userList$.next ( [ ...this.userList,
                   //                         usr
                   // ] );
                   this.getUserList ().then(
                     (  ) => {
                       this.selectedUsr   = usr;
                       this.selectedIndex = this.userList.length - 1;
                     }
                   );
                 } )
               )
               .toPromise ();
  }

  delUsr ( user: User ): Promise<any> {
    return this.$http.delete<any> ( `${this.endpoint}${user.id}` )
               .pipe (
                 tap ( () => {
                     /*
                     this.userList.splice ( this.userList.indexOf ( user ), 1 );
                     this.userList$.next ( [ ...this.userList ] );
                     */
                     this.getUserList ();
                     this.selectedUsr   = undefined;
                     this.selectedIndex = - 1;
                   },
                   error => {
                      console.error( error );
                   } )
               )
               .toPromise ();
  }

  updateUsr ( user: User ): Promise<User> {
    return this.$http.put<User> ( `${this.endpoint}${user.id}`, user )
               .pipe(
                 tap ( usr => {
                   this.getUserList ().then(
                     (  ) => {
                       let ind = - 1;
                       this.selectedUsr = this.userList.find ( ( value, index ) => {
                         if ( value.id === usr.id ) {
                           ind = index;
                           return true;
                         }
                         return false;
                       } );
                       this.selectedIndex$.next ( ind );
                     }
                   );
                 })
               )
               .toPromise();
  }

}
