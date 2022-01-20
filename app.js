require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


// creating a express object
const app = express();


// setting for render ejs files
app.set("view engine", "ejs");


// using the values in the .env file of dotenv.
const { WEB_PORT, MONGODB_URI} = process.env;

// connecting our database

mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
mongoose.connection.on("error", (err) => {
    console.error(err);
    console.log("error connecting to the database");
    process.exit();
});



// setting express for static files
app.use(express.static(path.join(__dirname, "public")));


// routing web pages
app.get("/", (req, res)=>{
    res.render("index")
});










app.listen(WEB_PORT, () =>{
    console.log(`Web running at http://localhost:${WEB_PORT}`)
});