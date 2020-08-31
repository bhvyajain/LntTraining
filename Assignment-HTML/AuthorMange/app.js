const express = require("express");
const app = express();
port = 8000;
app.use("/sample", function (req, res) {
  console.log("sample");
});
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`server is running successfully ${port}`);
});
