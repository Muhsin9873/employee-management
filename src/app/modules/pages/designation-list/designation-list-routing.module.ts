import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from 'src/app/shell/shell.service';
import { DesignationListComponent } from './designation-list.component';
import { extract } from 'src/app/core';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: DesignationListComponent,
      data: { title: extract('Designation') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationListRoutingModule { }
