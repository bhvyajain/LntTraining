const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const book = require("../entites/book");
const username = process.env.BMS_DB_USERNAME;
const password = process.env.BMS_DB_PASSWORD;
const server = process.env.BMS_DB_SERVER;
const dbname = process.env.BMS_DB_DBNAME;
class BookRepository {
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
    return await book.find().toArray();
  }
  async Add(bookadd) {
    bookadd = new book();
    await book.insert(bookadd);
  }
  async getById(id) {
    let bookid = await book.findOne({ id: id });
    return bookid;
  }
  async getByBook(author) {
    let bookname = await book.findOne({ title: { author: author } });
    return bookname;
  }
  async getByPhoto(photourl) {
    let bookname = await book.findOne({ coverpageurl: { title: title } });
    return bookname;
  }
  async update(id) {
    let updateid = await book.updateOne({ id: id });
    return updateid;
  }
  async remove(id) {
    await book.deleteOne({ id: id });
  }
}
module.exports = BookRepository;
