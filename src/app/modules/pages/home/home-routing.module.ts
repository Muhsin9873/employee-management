import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from 'src/app/shell/shell.service';
import { HomeComponent } from './home.component';
import { extract } from 'src/app/core';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: HomeComponent,
      data: { title: extract('Designation') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
