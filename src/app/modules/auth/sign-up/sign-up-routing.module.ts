import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth.component';
import { SignUpComponent } from './sign-up.component';
import { extract } from 'src/app/core';

const routes: Routes = [
  {
    path:'',
    component: AuthComponent,
  children:[
    {
      path:'register',
      component: SignUpComponent,
      data: { title: extract('Register') },
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
