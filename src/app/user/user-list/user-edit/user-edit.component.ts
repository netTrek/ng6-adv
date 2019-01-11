import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserSelectionService } from '../user-selection.service';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { User } from '../../user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { skipWhile, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../../user.service';

@Component({
  selector: 'pl-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {

  @ViewChild ( NgForm )
  private form: NgForm;

  private user$: Observable<User>;
  private redirectSub: Subscription;

  constructor( private $userSelection: UserSelectionService, private router: Router, private $user: UserService ) { }

  ngOnInit() {
    this.user$ = this.$userSelection.selectedUser;
    this.redirectSub = this.user$.subscribe( value => {
      if ( ! value ) {
        this.router.navigate( ['/users'] );
      }
    });
  }

  ngOnDestroy (): void {
    this.redirectSub.unsubscribe();
  }

  sendFormData () {
    this.$user.editUser( this.form.value ).then(
      _ => {
        this.router.navigate( ['/users'] );
      }
    );
  }
}
