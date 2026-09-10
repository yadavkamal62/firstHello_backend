require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("../config/Database");



connectDB()
 .then(()=>{
  console.log("database can`t connect");
  app.listen(PORT, () => {
  console.log("server is running port  3000.....");
});
 })

 .catch((err)=>{
  console.log("database can not connect");
 })
