let BookManager = function () {
  this.books = []; //an empty list of books;
};

BookManager.prototype.addbook = function (book) {
  if (book && book.id && book.title) this.books.push(book);
};
BookManager.prototype.UpdatebookDetais = function (book) {
  let temp = book;
  let temp2 = this.books;
  debugger;
  console.log("before  temp", temp);
  console.log("before Updated", this.temp2);
  for (let val of temp2)
    if (val.id === temp.id) {
      val.title = temp.title;
      val.coverpageurl = temp.coverpageurl;
      val.author = temp.author;
      val.price = price;
      val.rating = rating;
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
