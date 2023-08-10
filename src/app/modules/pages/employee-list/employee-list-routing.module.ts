import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from 'src/app/shell/shell.service';
import { EmployeeListComponent } from './employee-list.component';
import { extract } from 'src/app/core';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: EmployeeListComponent,
      data: { title: extract('Employee') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeListRoutingModule { }
