let Author = require("./author");
//let { searchAll } = require("..utilfunction/utils");

let AuthorManager = function () {
  this.authors = [];
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
//console.log("sample befoe promise", this.authors);
let sample = [];
AuthorManager.prototype.addAuthor = function (author) {
  let promise = new Promise(function (resolve, reject) {
    if (!author && !author.Id && !author.Name) {
      return reject("No name ID");
    } else {
      sample.push(author);
      return resolve("added succesfully");
    }
  });
  this.authors = sample;
  //console.log("sample befoe promise", this.authors);
  return promise;
};

AuthorManager.prototype.getAll = function () {
  //setTimeout(() => console.log("getall chek", this.author), 5000);
  console.log("getall chek", this.authors);
  return this.authors;
};

AuthorManager.prototype.getById = function (id) {
  let sample = this.authors;
  //console.log("id by check", this.authors);
  let promise = new Promise(function (resolve, reject) {
    for (let author of sample)
      if (author.Id === id) {
        return resolve(author, FS);
      }
    return reject(NFS);
  });
  return promise;
};

AuthorManager.prototype.remove = function (id) {
  let sample = this.authors;
  sample = search(sample, (a) => a.Id !== id);
};

AuthorManager.prototype.search = function (isMatch) {
  // console.log("search called");
  // return searchAll(this.authors, isMatch);
  let sample = this.authors;
  let promise = searchAll(sample, isMatch);
  promise.then((r) => console.log(r)).catch((e) => console.log(e));
};
AuthorManager.prototype.Update = function (...result) {
  for (var reval of this.authors)
    if (result.Name === reval.Name) {
      return { authors, ...result };
    }
};

function showAuthors(authors, heading = null) {
  console.log(heading);
  for (let author of authors) {
    console.log(`${author}`);
  }
}
//
module.exports = {
  AuthorManager: AuthorManager,
  showAuthors: showAuthors,
};
