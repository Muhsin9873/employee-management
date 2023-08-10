import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { AddEmployeeComponent } from './add-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [AddEmployeeComponent],
  imports: [
    CommonModule,
    AddEmployeeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AddEmployeeModule { }
