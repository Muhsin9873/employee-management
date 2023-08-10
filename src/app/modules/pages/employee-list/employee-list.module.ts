import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    NgxSpinnerModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class EmployeeListModule { }
