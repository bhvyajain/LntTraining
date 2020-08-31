let Author = function (id, name, biography, birthdate, email, bookslist) {
  this.id = id;
  this.name = name;
  this.biography = biography;
  this.birthdate = birthdate;
  this.email = email;
  this.bookslist = bookslist; //currently and empty list of books
};
Author.prototype.toString = function () {
  return `Author[${this.id},${this.name}]`;
};
