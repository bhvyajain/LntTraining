const book = require("../entites/book");
const Bookrepo = require("../controller/book-repository");
const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();

let bookrepo = new Bookrepo();

function addbook(req, res) {
  var booklist = new book({
    bid: req.body.bid,
    title: req.body.title,
    coverpageurl: req.body.coverpageurl,
    author: req.body.author,
    price: req.body.price,
    rating: req.body.rating,
  });
  bookrepo
    .Add(booklist)
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
  uid = req.params.uid;
  console.log("cfdf", uid);
  bookrepo
    .getById(uid)
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
  author = req.params.author;
  console.log("name", author);
  bookrepo
    .getByBook(author)
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
  console.log("bid", req.params);
  var updatelist = new book({
    bid: req.params.bid,
    title: req.body.title,
    coverpageurl: req.body.coverpageurl,
    author: req.body.author,
    price: req.body.price,
    rating: req.body.rating,
  });
  bookrepo
    .update(updatelist)
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
  bid = req.params.bid;
  bookrepo
    .remove(bid)
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
routes.get("/book/findall", findAll);
routes.get("/book/:uid", findbyId);
routes.get("/book/findauthor/:author", findByBook);
routes.put("/book/update/:uid", updatebook);
routes.post("/book/addbook", addbook);
routes.delete("/book/removebook/:uid", removebook);

module.exports = routes;
