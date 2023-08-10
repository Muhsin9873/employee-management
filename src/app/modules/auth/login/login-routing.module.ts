import { NgModule } from '@angular/core';
import { extract } from 'src/app/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth.component';
import { LoginComponent } from './login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component: AuthComponent,
  children:[
    {
      path:'login',
      component: LoginComponent,
      data: { title: extract('Login') },
    },
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
export class LoginRoutingModule { }
