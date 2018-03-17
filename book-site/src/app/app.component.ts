import { Component } from '@angular/core';
import {BookService} from "./services/book.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  book = null;

  constructor(svc: BookService) {
    svc.testRoute()
      .subscribe((test) => this.book = test);
  }
}
