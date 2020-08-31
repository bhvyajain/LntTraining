const author = require("../entites/author");
const Authorrepo = require("../controller/author-repository");

const express = require("express");
const routes = express.Router();

let authorrepo = new Authorrepo();

function addauthor(req, res) {
  var authorlist= new author({
       id=req.body.id,
        name=req.body.name,
 biography=req.body.biography,
 birthdte=req.body.birthdte,
 email=req.body.email,
 listofbooks=req.body.listofbooks
  })
 
  authorrepo
    .Add(authorlist)
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
  authorrepo
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
  authorrepo
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
  authorrepo
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
function updateauthor(req, res) {
  id = req.body.id;
  authorrepo
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
function removeauthor(req, res) {
  id = req.body.id;
  authorrepo
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
routes.get("/author", findAll);
routes.get("/author/:id", findbyId);
routes.get("/author/:name", findByBook);
routes.put("/author", updateauthor);
routes.post("/author", addauthor);
routes.delete("/autho:id", removeauthor);

module.exports = routes;
