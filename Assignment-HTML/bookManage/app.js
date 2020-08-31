const express = require("express");
const app = express();
port = 9000;
app.get("/sample", function (req, res) {
  console.log("sample");
  res.send("dcuicu");
});
app.use((request, response, next) => {
  console.log(`request for ${request.url}`);
  if (request.url === "" || request.url == "/") request.url = "/book.html";

  next(); //pass the request to next item
});

//serve the static files
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`server is running successfully ${port}`);
});
