let Author = require("./author");
let { AuthorManager, showAuthors } = require("./authormanager");
//const { contains } = require("../utilfunction/utils");

let manager = new AuthorManager();
let a1 = new Author(
  "1234389",
  "kalpanaSuresh",
  "Verygoodwriter",
  "12/1/1965",
  "kalpanasuresh@gmail.com",
  "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
  ["ramav.1", "shamav.2", "bhamav.3"]
);
let a2 = new Author(
  "456648",
  "MaryRodgruz",
  "VerygoodPoemwriter",
  "17/8/1895",
  "MaryRodgru@gmail.com",
  "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
  ["simplelife", "Runawaybride"]
);
let a3 = new Author(
  48998,
  "SuezMcrawth",
  "VerygoodPlaywriter",
  "17/8/1895",
  "SuezMcrawth@gmail.com",
  "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
  ["TestwithAlpho", "BEHINDTHEbar"]
);
let a4 = new Author(
  143698,
  "ShymalDinakar",
  "Verygoodstorywriter",
  "17/8/1985",
  "ShymalDinakar@gmail.com",
  "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
  ["RahakahaRabba", "GreatIndianStory"]
);
let a5 = new Author(
  123,
  "MohmedhYusuf",
  "VerygoodPlaywriter",
  "07/12/1875",
  "MohmedhYusuf@gmail.com",
  "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
  ["kahahaiDeewar", "ShanMoghal"]
);
function contains(mainString, subString) {
  let index = mainString.toLowerCase().indexOf(subString.toLowerCase());
  console.log(index);
  return index >= 0;
}
var chkpromise = manager.addAuthor(a1);
chkpromise
  .then((r) => console.log("author check:", r))
  .catch((e) => console.log(e));
var chkpromise2 = manager.addAuthor(a2);
chkpromise2.then((r) => console.log(r)).catch((e) => console.log(e));
var chkpromise3 = manager.addAuthor(a3);
chkpromise3.then((r) => console.log(r)).catch((e) => console.log(e));
var chkpromise4 = manager.addAuthor(a4);
chkpromise4.then((r) => console.log(r)).catch((e) => console.log(e));
var chkpromise5 = manager.addAuthor(a5);
chkpromise5.then((r) => console.log(r)).catch((e) => console.log(e));

setTimeout(() => {
  manager.getAll();
}, 10000);

samlepromise = manager.getById("1234389");
samlepromise.then((r) => console.log(r)).catch((e) => console.log(e));

manager.search((a) => contains(a.Biography, "VerygoodPlaywriter"));
//showAuthors(fictionAuthors, "Author Name");
let min = 3;
manager.search((a) => a.listofbooks.length >= min);
//showAuthors(minBookAuthor, `Authors with atlest ${min} book`);
