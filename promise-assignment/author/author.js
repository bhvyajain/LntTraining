let Author = function (
  Id,
  Name,
  Biography,
  Birthdate,
  Email,
  PhotographUrl,
  listofbooks
) {
  this.Id = Id;
  this.Name = Name;
  this.Biography = Biography;
  this.Birthdate = Birthdate;
  this.Email = Email;
  this.PhotographUrl = PhotographUrl;
  this.listofbooks = listofbooks;
};
Author.prototype.toString = function () {
  return `Author[${this.Id},${this.Name}]`;
};

module.exports = Author;
