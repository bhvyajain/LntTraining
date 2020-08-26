//AuthDetailsModel
function Author(
  Id,
  Name,
  Biography,
  Birthdate,
  Email,
  PhotographUrl,
  listofbooks
) {
  (this.Id = Id),
    (this.Name = Name),
    (this.Biography = Biography),
    (this.Birthdate = Birthdate),
    (this.Email = Email),
    (this.PhotographUrl = PhotographUrl),
    (this.listofbooks = listofbooks);
}
//ArrayforaLLauthDetails
authList = [];
//FunctiontoaddaauthDetails
function addAuthor(
  Id,
  Name,
  Biography,
  Birthdate,
  Email,
  PhotographUrl,
  listofbooks
) {
  authList.push(
    new Author(
      Id,
      Name,
      Biography,
      Birthdate,
      Email,
      PhotographUrl,
      listofbooks
    )
  );
}
//FunctiontogetallAthorsNAME
function getAllAuthors() {
  Allauthors = authList.map((arr) => {
    return arr.Name;
  });
  console.log("AllAuthorsNameis:", Allauthors);
  return Allauthors;
}
//FUNCTIONTOtogetauhnameandauthId
function getAllAuthersId() {
  AllauthorsId = authList.map((arr) => {
    return arr.Name, arr.Id;
  });
  console.log("AllAuthorsNameandIDis:", AllauthorsId);
  return AllauthorsId;
}
//SearchingAuthorbyname
function AuthNameSearch(Name) {
  authName = authList.find((arr) => arr.Name === Name);
  console.log(authName);
  console.log("AutherSearchbyName", authName);
  return authName;
}
//SearchingAuthorbyBio
function AuthBiographySearch(Name) {
  authBiography = authList.find((arr) => arr.Biography === Name);
  console.log("AutherSearchbyBio:", authBiography);
  return authBiography;
}
//SearchingAuthorbyBooks
function AuthBooKSearch(Name) {
  authId = authList.find(function (arr, index) {
    arr.listofbooks[index] === Name;
  });
  console.log("books serach", authId);
  console.log("AutherByBooksearch", authId);
}
//Deletetheauthor
function DeleteAuthor(Name) {
  for (var i = 0; i <= authList.length; i++)
    if (authList[i].Name === Name) {
      authList.splice(i, 1);
      return authList;
    }
  console.log("Authisdeleted", authList);
}
//UpdateAuthordetails
function UpdateAuthDetais(Name, Biography, Birthdate, Email, PhotographUrl) {
  for (var i = 0; i <= authList.length; i++)
    if (authList[i].Name === Name) {
      authList[i].Biography = Biography;
      authList[i].Birthdate = Birthdate;
      authList[i].Email = Email;
      authList[i].PhotographUrl = PhotographUrl;
      console.log("updatedAuthDetails", authList[i]);
      return authList;
    }
}
//TestCases
