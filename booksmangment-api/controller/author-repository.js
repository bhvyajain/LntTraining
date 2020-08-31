//let Author = require("../entites/author");

const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const author = require("../entites/author");
const username = process.env.BMS_DB_USERNAME;
const password = process.env.BMS_DB_PASSWORD;
const server = process.env.BMS_DB_SERVER;
const dbname = process.env.BMS_DB_DBNAME;
class AuthorRepository {
  constructor() {
    this.dbconnecton();
  }

  dbconnecton() {
    const uri = `mongodb+srv://${username}:${password}@${server}/${dbname}?retryWrites=true&w=majority`;

    const client = new mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log("sucesss");
      })
      .catch((err) => {
        console.log("fail", err);
      });
  }
  async getAll() {
    return await author.find();
  }
  async Add(authoradd) {
    console.log(authoradd);
    //authoradd = new author();
    return await authoradd.save(authoradd);
  }
  async getById(id) {
    let authorid = await author.findOne({ id: id });

    return authorid;
  }
  async getByBook(name) {
    let authorname = await author.findOne({
      listofbook: { $eq: { name: name } },
    });
    return authorname;
  }

  async update(updatelist) {
    let name = updatelist.name;
    console.log("mention list", updatelist);
    let updateid = await author.updateOne({ name: name }, updatelist);
    return updateid;
  }
  async remove(id) {
    return await author.deleteOne({ id: id });
  }
}
module.exports = AuthorRepository;
