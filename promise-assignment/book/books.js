let Book = function (Id, Title, coverPageUrl, Author, Price, Rating) {
  this.Id = Id;
  this.Title = Title;
  this.coverPageUrl = coverPageUrl;
  this.Author = Author;
  this.Price = Price;
  this.Rating = Rating;
};
Book.prototype.toString = function () {
  return `Book[${this.Id},${this.Title}]`;
};

module.exports = Book;
