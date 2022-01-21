require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const Duty = require("./models/Duties");
const dutyController = require("./controllers/duty");
// creating a express object
const app = express();

// setting for render ejs files
app.set("view engine", "ejs");

// using the values in the .env file of dotenv.
const { PORT, MONGODB_URI } = process.env;

// connecting our database

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log("error connecting to the database");
  process.exit();
});

// setting express for static files
app.use(express.static(path.join(__dirname, "public")));

// middlewares
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));

// routing web pages
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dutylist", dutyController.list);

app.post("/duties/add", dutyController.create);

app.get("/update/:id", dutyController.update);

app.post("/update/:id", dutyController.updateDuty);

app.get("/delete/:id", dutyController.delete);

app.get("/status/:id", dutyController.dutyStatus);

app.listen(PORT, () => {
  console.log(`Web running at http://localhost:${PORT}`);
});
