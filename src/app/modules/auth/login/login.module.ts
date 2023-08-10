import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ShellModule } from 'src/app/shell/shell.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';
import { AuthComponent } from '../auth.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    LoginRoutingModule,
    SharedModule,
    ShellModule,
    FormsModule,
    NgxSpinnerModule
  ],
  declarations: [LoginComponent, AuthComponent],
})
export class LoginModule { }
