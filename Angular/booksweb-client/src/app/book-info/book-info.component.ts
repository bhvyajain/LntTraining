import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../service/book';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css'],
})
export class BookInfoComponent implements OnInit {
  @Input() public book: Book;
  books: Book[];
  constructor() {
    this.books = [
      {
        title: 'The Accursed God',
        author: 'Vivek Dutta Mishra',
        description:
          'The epic tale of Mahabharata searching if it was just a family fued as you were made to believe or it was the first world war? Follow through the first book of The Lost Epic Series',
        bookId: '00108',
        price: 199,
        rating: 4.8,
        releaseDate: '01/15/2020',
        cover: 'the-accursed-god-w.jpg',
        tags: 'Indian Epic, Mahabharata, Book Series',
      },
      {
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        description:
          'The story of a person wrongly implicated for a false crime and is send to prison. He returns  to seek the vengeane, love and justice.',
        bookId: '7126',
        releaseDate: '01/04/1836',
        price: 450,
        rating: 4.8,

        tags: 'Crime,Adventure,Classic,Best-Seller,Revenge,Justice',
      },
      {
        title: 'Kane And Abel',
        author: 'Jeffrey Archer',
        description:
          'story of two men born on the same date on opposite side of the globe and economy and years later fate brings them for a head on collission. The best selling book by the author.',
        bookId: '78983',
        releaseDate: '01/05/1977',
        price: 220,
        rating: 3.5,

        tags: 'best-seller,chronology',
      },
      {
        title: 'Rashmirathi',
        author: 'Ramdhari Singh Dinkar',
        description:
          'A poetic tale of Karna of Mahabharat. The seven chapter gives a glimpse of the life and harship of one of the greatest warrior of his time',
        bookId: '10588193',
        price: 450,
        releaseDate: '01/05/1953',
        rating: 4.5,

        tags: 'classic, poetry, mahabharata, karna, hindi',
      },
    ];
  }

  ngOnInit(): void {
    this.bookdispaly(10588193);
  }
  // tslint:disable-next-line: typedef
  bookdispaly(bookid) {
    this.book = this.books.find((o) => o.bookId === bookid);
  }
}
