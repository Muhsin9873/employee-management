import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'src/app/shared';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { DesignationListModule } from './designation-list/designation-list.module';
import { AddEmployeeModule } from './add-employee/add-employee.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    TableModule,
    EmployeeListModule,
    DesignationListModule,
    AddEmployeeModule,
    HomeModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PagesModule {}
