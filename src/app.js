require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT
const connectDB = require("./config/Database");
const User = require("./models/user")

app.post("/signup", (req, res) => {


    const user = new User({
        firstName: "kamal",
        lastName: "yadav",
        emailId: "ky1661@gmail.com",
        password: "kamal2005"
    })
    try{
    user.save();
    res.send("user added  successfully")

    }catch (err){
        res.status(400).send("error saving" + err.massage )

    }
})



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
