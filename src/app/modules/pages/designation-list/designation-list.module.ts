import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignationListRoutingModule } from './designation-list-routing.module';
import { DesignationListComponent } from './designation-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [DesignationListComponent],
  imports: [
    CommonModule,
    DesignationListRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    NgxSpinnerModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DesignationListModule { }
