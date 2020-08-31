class Book {
  constructor(id, title, coverpageurl, author, price, rating) {
    this.id = id;
    this.title = title;
    this.coverpageurl = coverpageurl;
    this.author = author;
    this.price = price;
    this.rating = rating;
  }

  toString() {
    return `Book[Id=${this.id}\tName=${this.title}]`;
  }
}

module.exports = Book;
