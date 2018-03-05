import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../../app.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() myEvent = new EventEmitter<string>();
  constructor(public parent: AppComponent, public service:TaskService) { }

  ngOnInit() {
      this.parent.ngOnChanges();
  }

}
