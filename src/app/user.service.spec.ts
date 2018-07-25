import { TestBed/*, inject*/, async } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from './user';
import { environment } from '../environments/environment';
import { afterEach } from 'selenium-webdriver/testing';

describe ( 'UserService', () => {

  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach ( () => {
    TestBed.configureTestingModule ( {
      imports  : [ HttpClientTestingModule ],
      providers: [ UserService ]
    } );
    service = TestBed.get ( UserService );
    httpMock = TestBed.get ( HttpTestingController );
  } );

  afterEach( () => {
    httpMock.verify();
  });

  it ( 'should create the service', async ( () => {
    expect ( service )
      .toBeTruthy ();
  } ) );

  it ( 'shold getUsers', () => {

    const dummyUsers: User[] = [
      { name: 'saban', age: 33 },
      { name: 'peter', age: 22 },
    ];

    service.getUsers();

    const testRequest = httpMock.expectOne( `${environment.endpoint}/users` );
    expect( testRequest.request.method ).toBe( 'GET' );

    testRequest.flush( dummyUsers );
    expect( service.users ).toBe( dummyUsers );

  });

  // it ( 'should be created', inject ( [ UserService ], ( service: UserService ) => {
  //   expect ( service )
  //     .toBeTruthy ();
  // } ) );

} );
