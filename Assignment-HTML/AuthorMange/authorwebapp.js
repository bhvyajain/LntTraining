let authorManager = new AuthorManager();
$("#updateform").hide();
$("#authors").hide();
function addAuthor() {
  let id = $("#id").val();
  let name = $("#name").val();
  let biography = $("#biography").val();
  let birthdate = $("#birthdate").val();
  let email = $("#email").val();
  let bookslist = $("#bookslist").val();
  let author = new Author(id, name, biography, birthdate, email, bookslist);
  console.log(author);
  authorManager.addAuthor(author);
  $("#fillform").trigger("reset");
  // window.location.replace("./authorDetails.html");
  updateList();
}

function updateList() {
  $("#authors").show();
  let authors = $("#authors");
  for (let author of authorManager.getAll()) {
    var table = document
      .getElementById("authorlist")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = author.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = author.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = author.biography;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = author.birthdate;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = author.email;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = author.bookslist;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<button class="btn btn-success" onClick="onEdit(this)">Edit</button>
                       <button class="btn btn-success" onClick="DeleteAuthor(this)">Delete</button>`;
  }
}
function DeleteAuthor(value) {
  let t = value.parentElement.parentElement;
  id = t.cells[0].innerHTML;
  // console.log("calling id", t.cells[0].innerHTML);
  authorManager.remove(id);
  updateList();
}
function onEdit(value) {
  $("#updateform").show();
  let t = value.parentElement.parentElement;
  document.getElementById("uid").value = t.cells[0].innerHTML;
  document.getElementById("uname").value = t.cells[1].innerHTML;
  document.getElementById("ubiography").value = t.cells[2].innerHTML;
  document.getElementById("ubirthdate").value = t.cells[3].innerHTML;
  document.getElementById("uemail").value = t.cells[4].innerHTML;
  document.getElementById("ubookslist").value = t.cells[5].innerHTML;
}
function UpdateAuthor() {
  let id = $("#uid").val();
  let name = $("#uname").val();
  let biography = $("#ubiography").val();
  let birthdate = $("#ubirthdate").val();
  let email = $("#uemail").val();
  let bookslist = $("u#bookslist").val();
  let author = new Author(id, name, biography, birthdate, email, bookslist);
  console.log(author);
  authorManager.UpdateAuthDetais(author);
  updateList();
  $("#updateform").trigger("reset");
  $("#updateform").hide();
}
