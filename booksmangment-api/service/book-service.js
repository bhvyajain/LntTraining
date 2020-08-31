const book = require("../entites/book");
const Bookrepo = require("../controller/book-repository");

const express = require("express");
const routes = express.Router();

let bookrepo = new Bookrepo();

function addbook(req, res) {
  var id = req.body.id;
  bookrepo
    .add(id)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "succesfully added",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function findAll(req, res) {
  bookrepo
    .getAll()
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function findbyId(req, res) {
  id = req.param.id;
  bookrepo
    .getById(id)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function findByBook(req, res) {
  name = req.param.name;
  bookrepo
    .getByBook(name)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function updatebook(req, res) {
  id = req.body.id;
  bookrepo
    .update(id)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function removebook(req, res) {
  id = req.body.id;
  bookrepo
    .remove(id)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
routes.get("/book", findAll);
routes.get("/book/:id", findbyId);
routes.get("/book/:title", findByBook);
routes.put("/book", updatebook);
routes.post("/book", addbook);
routes.delete("/book:id", removebook);

module.exports = routes;
