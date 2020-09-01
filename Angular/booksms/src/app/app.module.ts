import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksWebHeaderComponent } from './books-web-header/books-web-header.component';
import { BooksWebFooterComponent } from './books-web-footer/books-web-footer.component';
import { BooksWebComponent } from './books-web/books-web.component';
import { StarratingComponent } from './starrating.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksWebHeaderComponent,
    BooksWebFooterComponent,
    BooksWebComponent,
    StarratingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
