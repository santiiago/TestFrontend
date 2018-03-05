import { Component, OnInit, Inject} from '@angular/core';
import { task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { getLocaleDateTimeFormat } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogNewTask, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  ngOnInit() {}

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './DialogNewTask.html',
})
export class DialogNewTask {
  Users = [];
  taskModel: task = {
    task_name: null,
    task_priority: null,
    date_expired: null,
    owner: null
  };

  constructor(public dialogRef: MatDialogRef<DialogNewTask>,
              public taskService: TaskService,
              @Inject(MAT_DIALOG_DATA) public data: any)
              { }

    ngOnInit() {
      this.taskService.getUsers()
      .then((d: task[])=>{
        this.Users = d;
      })    
    }

    private refreshData() {
    }


    save() {
      this.taskService.createTask(this.taskModel);
      this.refreshData();
    }
  
    onNoClick(): void {
    this.dialogRef.close();
  }

}