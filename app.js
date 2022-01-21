require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const Duty = require("./models/Duties");

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

// middlewares
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: false}));


// routing web pages
app.get("/", (req, res)=>{
    res.render("index")
});

app.get("/dutylist", async(req, res) =>{
    const dutieslist = await Duty.find();
    console.log(dutieslist)
    res.render("dutylist", { dutieslist: dutieslist});
});

app.post("/duties/add", async(req, res)=>{
    const duty = Duty(req.body);
    const dutySaved = await duty.save();
    console.log(dutySaved);
    res.redirect("/");
});









app.listen(WEB_PORT, () =>{
    console.log(`Web running at http://localhost:${WEB_PORT}`)
});