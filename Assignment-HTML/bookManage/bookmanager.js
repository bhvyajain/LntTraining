let BookManager = function () {
  this.books = []; //an empty list of books;
};

BookManager.prototype.addbook = function (book) {
  if (book && book.id && book.name) this.books.push(book);
};
BookManager.prototype.UpdatebookDetais = function (book) {
  let temp = book;
  console.log("before  temp", temp);
  console.log("before Updated", this.books);
  for (let i = 0; i <= this.books.lenth; i++) console.log(i);
  if (this.books.id === temp.id) {
    this.books.title = temp.name;
    this.books.coverpageurl = temp.coverpageurl;
    this.books.author = temp.author;
    this.books.price = price;
    this.books.rating = rating;
    console.log("updatedAuthDetails", this.books);
    return this.books;
  }
};
BookManager.prototype.getAll = function () {
  return this.books;
};

BookManager.prototype.getById = function (id) {
  //ES2015 for of loop to interate an array
  for (let book of this.books)
    if (book.id === id) {
      return book;
    }

  return null;
};

BookManager.prototype.remove = function (id) {
  let newList = [];
  for (let book of this.books) {
    if (book.id !== id) newList.push(book); //push all books to new list, except the one we have to remove
  }

  this.books = newList;
  console.log("deleted the list");
  console.log(this.books);
};

function showbooks(books, heading = null) {
  console.log(heading);
  for (let book of books) {
    console.log(`${book}`);
  }
}
