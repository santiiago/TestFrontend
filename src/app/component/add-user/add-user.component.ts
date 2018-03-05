import { Component, OnInit, Inject} from '@angular/core';
import { user } from '../../models/user';
import { TaskService } from '../../services/task.service';
import { getLocaleDateTimeFormat } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogNewUser, {
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
  templateUrl: './DialogNewUser.html',
})
export class DialogNewUser {
  Users = [];
  userModel: user = {
    email: null,
    password: null
  };

  constructor(public dialogRef: MatDialogRef<DialogNewUser>,
              public userService: TaskService,
              @Inject(MAT_DIALOG_DATA) public data: any)
              { }

    ngOnInit() {
      this.userService.getUsers()
      .then((d: user[])=>{
        this.Users = d;
      })    
    }

    private refreshData() {
    }


    save() {
      this.userService.createUser(this.userModel);
      this.refreshData();
    }
  
    onNoClick(): void {
    this.dialogRef.close();
  }

}