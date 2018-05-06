import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginLayoutComponent } from "../shared/layout/login-layout/login-layout.component";
import { LoginComponent } from '../login/login.component';
import { HomeLayoutComponent } from "../shared/layout/home-layout/home-layout.component";
import { HomeComponent } from "../home/home.component";

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',                      
    component: HomeLayoutComponent,
    // canActivate: [AuthGuard],       
    children: [
      {
        path: '',
        component: HomeComponent   
      }
    ]
  },  
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
