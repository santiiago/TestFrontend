import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { login } from '../../models/login';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: login = {
    email: null,
    password: null
  };

  constructor(public taskservice:TaskService, private router: Router, public parent: AppComponent) { }

  ngOnInit() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');
    this.parent.logout();
  }

  result = []
  login() {
    var data = this.taskservice.login(this.loginModel).subscribe(resultObservable => this.result.push(resultObservable))
    if (this.result.length > 0) {
      localStorage.setItem('usuario', this.result[0].email);
      localStorage.setItem('id', this.result[0].id);
      this.router.navigateByUrl('');
    }
  }

}
