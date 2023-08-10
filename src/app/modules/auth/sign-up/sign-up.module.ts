import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { ShellModule } from 'src/app/shell/shell.module';
import { SharedModule } from 'primeng/api';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from '../auth.component';


@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule,
    ShellModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  declarations: [SignUpComponent],
})
export class SignUpModule { }
