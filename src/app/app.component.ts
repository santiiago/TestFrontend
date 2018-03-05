import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  session = false;

  constructor() { }

  ngOnInit() {
    if (localStorage.length > 0) {
      this.session = true;
    }
  }

  ngOnChanges () {
    if (localStorage.length > 0) {
      this.session = true;
    }
  }

  logout () {
    this.session = false;
  }

}
