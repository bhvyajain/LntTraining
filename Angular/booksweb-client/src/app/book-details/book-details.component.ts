import { Component, OnInit } from '@angular/core';
import { Book } from '../service/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  private books: Book[];
  public selectedBook: Book;
  public bookid: any;
  constructor(private activatedRoute: ActivatedRoute) {
    console.log('this.activatedRoute', this.activatedRoute);
    console.log('route', this.activatedRoute.snapshot.params.bookId);

    //  console.log('this.activatedRoute.params.bookId',this.activatedRoute.params._value.bookId);
  }

  ngOnInit(): void {
    this.bookid = this.activatedRoute.snapshot.params.bookId;
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

    this.selectedBook = this.books[0];
  }
}
