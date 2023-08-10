import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee.component';
import { Shell } from 'src/app/shell/shell.service';
import { extract } from 'src/app/core';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: AddEmployeeComponent,
      data: { title: extract('Add Employee') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmployeeRoutingModule { }
