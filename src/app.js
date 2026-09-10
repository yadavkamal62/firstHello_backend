require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT
const connectDB = require("./config/Database");
const User = require("./models/user")

app.use(express.json());//this is a middelware

// signup api
app.post("/signup",async(req,res)=>{

   const user =new User(req.body)
    try{
        await user.save()
        res.send("user added")

    }catch(err){
        err.send("error saving to user"+ err.massage)
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
