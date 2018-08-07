import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'pr-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  tono  = 'tono';
  hawai = 'hawai';

  crrPizza = this.tono;

  className        = 'make-red';
  classString      = 'hello world';

  styleObject = {
    'color'    : 'blue',
    'font-size': '2em'
  };

  fontColor = 'blue';
  fontSize  = 3;

  constructor ( public $user: UserService ) {
  }

  ngOnInit () {
  }

  selectNextUsr () {
    this.$user.selectNextUsr();
    if ( this.$user.selectedIndex % 2 === 0 ) {
      this.className = 'make-blue';
    } else {
      this.className = 'make-red';
    }
  }

  setAsSelected ( user: User ) {
    this.$user.setAsSelected( user );
  }


  selectIndex ( ind: number, $event: MouseEvent ) {
    this.$user.selectIndex ( ind, $event );
  }

  delUsr ( user: User ) {
    this.$user.delUsr( user );
  }

  trackByFn ( index, item ) {
    // console.log ( index,  item);
    return index; // item.id;
  }

  addUser ( inputElem: HTMLInputElement ) {
    if ( inputElem.value && inputElem.value.trim ().length > 0 ) {
      this.$user.addUser( <User>{
        firstname: inputElem.value,
        lastname : inputElem.value,
        id       : this.$user.userList.length,
        birthday : '04-04-99'
      } );
      inputElem.value = '';
    }
  }

  confirmedHandler () {
    console.log ( 'confirmed' );
  }

  abortHandler () {
    console.log ( 'abord' );
  }
}
