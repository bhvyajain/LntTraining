let bookManager = new BookManager();
$("#updateform").hide();
$("#authors").hide();
function addbook() {
  let id = $("#id").val();
  let title = $("#title").val();
  let coverpageurl = $("#coverpageurl").val();
  let author = $("#author ").val();
  let price = $("#price").val();
  let rating = $("#rating").val();
  let books = new Book(id, title, coverpageurl, author, price, rating);
  console.log(books);
  bookManager.addbook(books);
  updateList();
  $("#fillform").trigger("reset");
  // window.location.replace("./authorDetails.html");
}

function updateList() {
  //console.log("show list");
  // $("#authors").show();
  // let books = $("#authors");
  for (let books of bookManager.getAll()) {
    var table = document
      .getElementById("booklist")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    console.log("books array", books);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = books.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = books.title;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = books.coverpageurl;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = books.author;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = books.price;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = books.rating;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<button class="btn btn-success" onClick="onEdit(this)">Edit</button>
                       <button class="btn btn-success" onClick="Deletebook(this)">Delete</button>`;
  }
}
function Deletebook(value) {
  let t = value.parentElement.parentElement;
  id = t.cells[0].innerHTML;
  // console.log("calling id", t.cells[0].innerHTML);
  bookManager.remove(id);
  updateList();
}
function onEdit(value) {
  $("#updateform").show();
  let t = value.parentElement.parentElement;
  document.getElementById("uid").value = t.cells[0].innerHTML;
  document.getElementById("utitle").value = t.cells[1].innerHTML;
  document.getElementById("ucoverpageurl").value = t.cells[2].innerHTML;
  document.getElementById("uauthor ").value = t.cells[3].innerHTML;
  document.getElementById("uprice").value = t.cells[4].innerHTML;
  document.getElementById("urating").value = t.cells[5].innerHTML;
}
function Updatebook() {
  let id = $("#uid").val();
  let title = $("#utitle").val();
  let coverpageurl = $("#ucoverpageurl").val();
  let author = $("#uauthor ").val();
  let price = $("#uprice").val();
  let rating = $("u#rating").val();
  let books = new Book(id, title, coverpageurl, author, price, rating);
  console.log(books);

  bookManager.UpdatebookDetais(books);
  updateList();
  $("#updateform").trigger("reset");
  $("#updateform").hide();
}
