import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'employee',
        loadChildren: () =>
          import('./employee-list/employee-list.module').then((mod) => mod.EmployeeListModule),
      },
      {
        path: 'designation',
        loadChildren: () =>
          import('./designation-list/designation-list.module').then((mod) => mod.DesignationListModule),
      },
      {
        path: 'employee/create',
        loadChildren: () =>
          import('./add-employee/add-employee-routing.module').then((mod) => mod.AddEmployeeRoutingModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((mod) => mod.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
