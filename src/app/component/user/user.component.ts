import { Component, OnInit, Inject } from '@angular/core';
import { user } from '../../models/user';
import { TaskService } from '../../services/task.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { $ } from 'protractor';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userModel: user;
  constructor(public userService: TaskService, public dialog: MatDialog) { 
    this.userService.getUsers()
    .then((d: user[])=>{
      this.userModel = d;
    })
  }
  ngOnInit() {
    this.userService.getUsers()
    .then((d: user[])=>{
      this.userModel = d;
    })
  }

  showEdit(user) {
    let dialogRef = this.dialog.open(editUser, {
      width: '350px',
      data: user
    });
  }

  confirmRemove(user) {
    let dialogRef = this.dialog.open(removeUser, {
      width: '350px',
      data: user
    });
  }

}


@Component({
  selector: 'remove',
  templateUrl: './remove.html',
})
export class removeUser {
  constructor(public userService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  removeUser() {
    this.userService.deleteUser(this.data)
  }
}


@Component({
  selector: 'edit',
  templateUrl: './editUser.html',
})
export class editUser {
  Users = [];
  userModel: user = {
    email: '',
  };

  constructor(public userService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.userModel['email'] = this.data.email;

        this.userService.getUsers()
        .then((d: user[])=>{
          this.Users = d;
        })
    }
    
    editUser() {
      this.userService.updateUser(this.userModel, this.data.id)
    }
}