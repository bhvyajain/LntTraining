let AuthorManager = function () {
  this.authors = []; //an empty list of authors;
};

AuthorManager.prototype.addAuthor = function (author) {
  if (author && author.id && author.name) this.authors.push(author);
};
AuthorManager.prototype.UpdateAuthDetais = function (author) {
  let temp = author;
  console.log("before  temp", temp);
  console.log("before Updated", this.authors);
  for (let i = 0; i <= this.authors.lenth; i++) console.log(i);
  if (this.authors.id === temp.id) {
    this.authors.name = temp.name;
    this.authors.biography = temp.biography;
    this.authors.birthdate = temp.birthdate;
    this.authors.email = email;
    this.authors.bookslist = bookslist;
    console.log("updatedAuthDetails", this.authors);
    return this.authors;
  }
};
AuthorManager.prototype.getAll = function () {
  return this.authors;
};

AuthorManager.prototype.getById = function (id) {
  //ES2015 for of loop to interate an array
  for (let author of this.authors)
    if (author.id === id) {
      return author;
    }

  return null;
};

AuthorManager.prototype.remove = function (id) {
  let newList = [];
  for (let author of this.authors) {
    if (author.id !== id) newList.push(author); //push all authors to new list, except the one we have to remove
  }

  this.authors = newList;
  console.log("deleted the list");
  console.log(this.authors);
};

function showAuthors(authors, heading = null) {
  console.log(heading);
  for (let author of authors) {
    console.log(`${author}`);
  }
}
