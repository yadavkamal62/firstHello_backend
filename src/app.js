require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT 
const connectDB = require("./config/Database");



connectDB()
    .then(() => {
        console.log("database connection established ...........");
        app.listen(PORT, () => {
            console.log(`server is successfully listening on port ${PORT} ...........`);
        });
    })
    .catch((err) => {
        console.log("database connction can't established");
    });
