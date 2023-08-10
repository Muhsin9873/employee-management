import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './modules/pages/pages.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./modules/pages/pages.module').then(mod => mod.PagesModule)
  },
  {
    path:'',
    loadChildren:() => import('./modules/auth/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path:'register',
    loadChildren:() => import('./modules/auth/sign-up/sign-up.module').then(mod => mod.SignUpModule)
  },
  
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
