import { NgModule } from '@angular/core';
import { BooksWebAppComponent } from './books-web-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BooksWebHeaderComponent } from './books-web-header-component/books-web-header.component';
import { BooksWebFooterComponent } from './books-web-footer.component';
import { StarRatingModule } from 'angular-star-rating';
import { BookInfoComponent } from './book-info/book-info.component';
import { BookListComponent } from './book-list/book-list.component';
import { CaRangeComponent } from './ca-range/ca-range.component';
import { StarratingComponent } from './starrating/starrating.component';
import { RatingModule } from 'ng-starrating';
@NgModule({
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
    // RatingModule,
    // most important angular module to enable component rendering
  ],

  declarations: [
    // list all the components and other elements related to current module
    BooksWebAppComponent,
    BooksWebHeaderComponent,
    BooksWebFooterComponent,

    BookInfoComponent,

    BookListComponent,

    CaRangeComponent,

    StarratingComponent,
  ],

  bootstrap: [
    // startup compoent for the module
    BooksWebAppComponent, // only root component should be in bootstrap
  ],
})
export class AppModule {}
