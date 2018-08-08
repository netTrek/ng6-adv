import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'pr-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {

  constructor( private $user: UserService, private $router: Router ) { }

  ngOnInit() {
  }

  addNewUser ( myForm: AbstractControl ) {
    this.$user.addUser( myForm.value as User ).then(
      success => this.$router.navigate( ['users', success.id] )
    );
  }

  resetForm ( myForm: AbstractControl ) {
    myForm.reset();
  }
}
