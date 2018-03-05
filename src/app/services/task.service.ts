import { Injectable, ErrorHandler }from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse }from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { task } from '../models/task';
import { user } from '../models/user';
import { login } from '../models/login';
import {of} from "rxjs/observable/of";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class TaskService {
  
  private loginUrl: string = 'http://localhost:1337/login';
  private tasksUrl: string = 'http://localhost:1337/tasks';
  private usersUrl: string = 'http://localhost:1337/users';
  constructor (private http: HttpClient) {}

  // login(login: login) {
  //   return  this.http.post(this.loginUrl, login, httpOptions).toPromise();
  // }

  login(login: login): Observable<login> {
    return this.http.post<login>(this.loginUrl, login, httpOptions)
      .pipe(
      );
  }

  getTasks() {
    return this.http.get(this.tasksUrl).toPromise();
  }

  getTasksInitial() {
    return this.http.get(this.tasksUrl).toPromise();
  }

  getUsers() {
    return this.http.get(this.usersUrl).toPromise();
  }


  createTask (task: task) {
    return  this.http.post(this.tasksUrl, task, httpOptions).toPromise();
  }

  updateTask (task: task, id) {
    return  this.http.put(this.tasksUrl + '/' + id, task).toPromise();
  }

  deleteTask (task) {
    return this.http.delete(this.tasksUrl + '/' + task).toPromise();
  }

  createUser (user: user) {
    return  this.http.post(this.usersUrl, user, httpOptions).toPromise();
  }

  updateUser (user: user, id) {
    return  this.http.put(this.usersUrl + '/' + id, user).toPromise();
  }

  deleteUser (user) {
    return this.http.delete(this.usersUrl + '/' + user).toPromise();
  }

}