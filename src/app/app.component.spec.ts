import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe ( 'AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let componet: AppComponent;
  let debugElement: DebugElement;
  let htmlElem: HTMLElement;

  const name = 'ps';

  beforeEach ( async ( () => {
    TestBed.configureTestingModule ( {
      declarations: [
        AppComponent
      ]
    } )
           .compileComponents ();
  } ) );

  beforeEach ( () => {
    fixture  = TestBed.createComponent ( AppComponent );
    componet = fixture.componentInstance;
    fixture.detectChanges ();
    debugElement = fixture.debugElement.query ( By.css ( 'h1' ) );
    htmlElem     = debugElement.nativeElement;
  } );

  it ( 'should create the app', async ( () => {
    expect ( componet )
      .toBeTruthy ();
  } ) );

  it ( `should have as title '${name}'`, async ( () => {
    expect ( componet.title )
      .toEqual ( name );
  } ) );

  it ( 'should render title in a h1 tag', async ( () => {
    expect ( htmlElem.textContent )
      .toContain ( `Welcome to ${name}!` );
  } ) );

  it ( 'should render title in a h1 tag', () => {
    expect ( htmlElem.textContent )
      .toContain ( `Welcome to ${name}!` );
  } );

  it ( 'should changeTitel', async ( () => {
    componet.changeTitel( 'test' );
    expect( componet.title ).toBe( 'test' );
  } ) );

  it ( 'should render title in a h1 tag', () => {
    componet.changeTitel( 'test' );
    fixture.detectChanges();
    expect ( htmlElem.textContent )
      .toContain ( `Welcome to test!` );
  } );
} );
