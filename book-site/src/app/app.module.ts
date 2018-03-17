import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BookService} from "./services/book.service";


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
