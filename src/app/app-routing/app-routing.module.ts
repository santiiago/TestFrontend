import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from '../component/task/task.component'
import { UserComponent } from '../component/user/user.component'
import { LoginComponent } from '../component/login/login.component'
import { HomeComponent } from '../component/home/home.component'

import { AppRoutingRoutingModule } from './app-routing-routing.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'users', component: UserComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [
    CommonModule,
    AppRoutingRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],  
  declarations: []
})
export class AppRoutingModule { }
