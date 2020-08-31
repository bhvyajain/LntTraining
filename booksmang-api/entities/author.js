class Author {
  constructor(id, name, biography = "", photograph = "", email = "") {
    this.id = id;
    this.name = name;
    this.biography = biography;
    this.photograph = photograph;
    this.email = email;
    this.books = [];
  }

  toString() {
    return `Author[Id=${this.id}\tName=${this.name}\tBooks=${this.books.length}]`;
  }
}

module.exports = Author;
