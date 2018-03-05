import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TaskComponent } from './component/task/task.component';
import { UserComponent } from './component/user/user.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { LoginComponent } from './component/login/login.component';
import { TaskService } from './services/task.service';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { DialogNewTask } from './component/add-task/add-task.component';
import { DialogNewUser } from './component/add-user/add-user.component';
import { remove, edit } from './component/task/task.component';
import { removeUser, editUser } from './component/user/user.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    UserComponent,
    AddTaskComponent,
    DialogNewTask,
    DialogNewUser,
    LoginComponent,
    remove,
    edit,
    editUser,
    removeUser,
    NavbarComponent,
    AddUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
  entryComponents: [DialogNewTask, DialogNewUser, remove, edit, editUser, removeUser]
})
export class AppModule { }
