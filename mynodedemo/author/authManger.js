//TestCases
addAuthor(
  1234389,
  "kalpanaSuresh",
  "Verygoodwriter",
  "12/1/1965",
  "kalpanasuresh@gmail.com",
  "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
  ["ramav.1", "shamav.2", "bhamav.3"]
);
addAuthor(
  456648,
  "MaryRodgruz",
  "VerygoodPoemwriter",
  "17/8/1895",
  "MaryRodgru@gmail.com",
  "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
  ["simplelife", "Runawaybride"]
);
addAuthor(
  48998,
  "SuezMcrawth",
  "VerygoodPlaywriter",
  "17/8/1895",
  "SuezMcrawth@gmail.com",
  "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
  ["TestwithAlpho", "BEHINDTHEbar"]
);
addAuthor(
  143698,
  "ShymalDinakar",
  "Verygoodstorywriter",
  "17/8/1985",
  "ShymalDinakar@gmail.com",
  "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
  ["RahakahaRabba", "GreatIndianStory"]
);
addAuthor(
  123,
  "MohmedhYusuf",
  "VerygoodPlaywriter",
  "07/12/1875",
  "MohmedhYusuf@gmail.com",
  "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
  ["kahahaiDeewar", "ShanMoghal"]
);
getAllAuthors();
getAllAuthersId();

AuthNameSearch("kalpanaSuresh");
AuthNameSearch("ShymalDinakar");

AuthBiographySearch("Verygoodwriter");
AuthBiographySearch("Verygoodstorywriter");

AuthBooKSearch("Runawaybride");

DeleteAuthor("SuezMcrawth");

UpdateAuthDetais("ShymalDinakar", 2, 4, 5, 6);
