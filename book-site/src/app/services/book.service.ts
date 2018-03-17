import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  testRoute(): Observable<{}> {
    return this.http.get<{}>("http://localhost:3000");
  }

}
