let Book = require("./books");
let Author = require("../author/author");
//let { searchAll } = require("../utilfunction/utils");

let BookManager = function () {
  this.Books = [];
};

const FS = "found serch element";
const NFS = "Not found !!! serch element";
function searchAll(list, isMatch) {
  let promise = new Promise(function (resolve, reject) {
    let result = [];
    for (let value of list)
      if (isMatch(value)) {
        result.push(value);
        console.log("searchall called");

        return resolve(result, FS);
      } else return reject(NFS);
  });
  return promise;
}
let sample = [];
BookManager.prototype.addBook = function (Book) {
  let promise = new Promise(function (resolve, reject) {
    if (!Book && !Book.Id && !Book.Title) {
      return reject("No Title ID");
    } else {
      sample.push(Book);
      return resolve("added succesfully");
    }
  });
  this.Books = sample;
  return promise;
};
BookManager.prototype.getAll = function () {
  console.log("getall chek", this.Books);
  return this.Books;
};
BookManager.prototype.getById = function (id) {
  let sample = this.Books;
  let promise = new Promise(function (resolve, reject) {
    for (let Book of sample)
      if (Book.Id === id) {
        return resolve(Book, FS);
      }
    return reject(NFS);
  });
  return promise;
};

BookManager.prototype.remove = function (id) {
  this.Books = search(this.Books, (a) => a.Id !== id);
};
BookManager.prototype.search = function (isMatch) {
  let promise = searchAll(this.Books, isMatch);
  promise.then((r) => console.log(r)).catch((e) => console.log(e));
};
BookManager.prototype.Update = function (...result) {
  for (var reval of this.Books)
    if (result.Title === reval.Title) {
      return { Books, ...result };
    }
};

function showBooks(Books, heading = null) {
  console.log(heading);
  for (let Book of Books) {
    console.log(`${Book}`);
  }
}

module.exports = {
  BookManager: BookManager,
  showBooks: showBooks,
};
