import { Component, OnInit, Inject } from '@angular/core';
import { task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { $ } from 'protractor';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskModel: task;
  constructor(public taskService: TaskService, public dialog: MatDialog) { 
    this.taskService.getTasks()
    .then((d: task[])=>{
      this.taskModel = d;
    })
  }
  ngOnInit() {
    this.taskService.getTasks()
    .then((d: task[])=>{
      this.taskModel = d;
    })
  }

  showEdit(task) {
    let dialogRef = this.dialog.open(edit, {
      width: '350px',
      data: task
    });
  }

  confirmRemove(task) {
    let dialogRef = this.dialog.open(remove, {
      width: '350px',
      data: task
    });
  }

}


@Component({
  selector: 'remove',
  templateUrl: './remove.html',
})
export class remove {
  constructor(public taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  removeTask() {
    this.taskService.deleteTask(this.data)
  }
}


@Component({
  selector: 'edit',
  templateUrl: './editTask.html',
})
export class edit {
  Users = [];
  taskModel: task = {
    task_name: '',
    task_priority: '',
    date_expired: '',
    owner: ''
  };

  constructor(public taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.taskModel['task_name'] = this.data.task_name;
        this.taskModel['task_priority'] = this.data.task_priority;
        // this.taskModel['date_expired'] =  $ ('date')(this.data.date_expired, "yyyy-MM-dd")
        this.taskModel['owner'] = this.data.owner.id;
        
        var from = this.data.date_expired.split("T");
        this.taskModel['date_expired'] = from[0] ;

        this.taskService.getUsers()
        .then((d: task[])=>{
          this.Users = d;
        })
    }
    
    editTask() {
      this.taskService.updateTask(this.taskModel, this.data.id)
    }
}