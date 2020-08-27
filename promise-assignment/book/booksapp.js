let Book = require("./books");
let Author = require("../author/author");
let { BookManager, showBooks } = require("./booksmanager");
//const { contains } = require("../utilfunction/utils");

let manager = new BookManager();
let a1 = new Book(
  "353465",
  "bhamav.3",
  "www.goodread.com",
  new Author(
    "1234389",
    "kalpanaSuresh",
    "Verygoodwriter",
    "12/1/1965",
    "kalpanasuresh@gmail.com",
    "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    ["ramav.1", "shamav.2", "bhamav.3"]
  ),
  23333,
  5.2
);
let a2 = new Book(
  "756854685",
  "Runawaybride",
  "www.readall.com",
  new Author(
    "456648",
    "MaryRodgruz",
    "VerygoodPoemwriter",
    "17/8/1895",
    "MaryRodgru@gmail.com",
    "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    ["simplelife", "Runawaybride"]
  ),
  5647,
  8.9
);
let a3 = new Book(
  "4646",
  "TestwithAlpho",
  "www.TestwithAlpho.com",
  new Author(
    48998,
    "SuezMcrawth",
    "VerygoodPlaywriter",
    "17/8/1895",
    "SuezMcrawth@gmail.com",
    "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    ["TestwithAlpho", "BEHINDTHEbar"]
  ),
  655787,
  5.6
);
let a4 = new Book(
  "46f446",
  "GreatIndianStory",
  "www.GreatIndianStory.com",
  new Author(
    143698,
    "ShymalDinakar",
    "Verygoodstorywriter",
    "17/8/1985",
    "ShymalDinakar@gmail.com",
    "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    ["RahakahaRabba", "GreatIndianStory"]
  ),
  900,
  8.5
);
let a5 = new Book(
  "475467",
  "ShanMoghal",
  "www.ShanMoghal.com",
  new Author(
    123,
    "MohmedhYusuf",
    "VerygoodPlaywriter",
    "07/12/1875",
    "MohmedhYusuf@gmail.com",
    "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    ["kahahaiDeewar", "ShanMoghal"]
  ),
  566,
  7.6
);
function contains(mainString, subString) {
  let index = mainString.toLowerCase().indexOf(subString.toLowerCase());
  console.log(index);
  return index >= 0;
}
var chkpromise = manager.addBook(a1);
chkpromise
  .then((r) => console.log("Book check:", r))
  .catch((e) => console.log(e));
var chkpromise2 = manager.addBook(a2);
chkpromise2.then((r) => console.log(r)).catch((e) => console.log(e));
var chkpromise3 = manager.addBook(a3);
chkpromise3.then((r) => console.log(r)).catch((e) => console.log(e));
var chkpromise4 = manager.addBook(a4);
chkpromise4.then((r) => console.log(r)).catch((e) => console.log(e));
var chkpromise5 = manager.addBook(a5);
chkpromise5.then((r) => console.log(r)).catch((e) => console.log(e));

setTimeout(() => {
  manager.getAll();
}, 10000);
samlepromise = manager.getById("353465");
samlepromise.then((r) => console.log(r)).catch((e) => console.log(e));

manager.search((b) => contains(b.Title, "Runawaybride"));
// showBooks(fictionBooks, "Book Name");
manager.search((b) => contains(b.Author.Name, "kalpana"));
// showBooks(minBookBook, `Books with atlest ${min} book`);
