let Book = function (id, title, coverpageurl, author, price, rating) {
  this.id = id;
  this.title = title;
  this.coverpageurl = coverpageurl;
  this.author = author;
  this.price = price;
  this.rating = rating; //currently and empty list of books
};
Book.prototype.toString = function () {
  return `Author[${this.id},${this.title}]`;
};
