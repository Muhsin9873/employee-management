import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ShellComponent } from './shell.component';


@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    SharedModule,
    RouterModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShellModule { }
