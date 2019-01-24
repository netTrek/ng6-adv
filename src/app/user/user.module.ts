import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UtilsModule } from '../utils/utils.module';
import { NoCachInterceptorService } from '../utils/no-cach-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule ( {
  declarations: [ /** registrieren Komponente, Direktive, Pipe **/
    UserListComponent,
    UserListItemComponent,
    UserAvatarComponent
  ],
  imports     : [
    CommonModule,
    UtilsModule
  ],
  exports     : [
    /** Komponente, Direktive, Pipe auszeichnen, die in anderen Modulen verwendet werden sollen **/
    UserListComponent,
    UserAvatarComponent
  ]
} )
export class UserModule {
}
