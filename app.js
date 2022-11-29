const express = require("express");
const app = express();
const router = require("./routes/index-route");
const welcome = require("./module-practice.js");
const bookData = require("./book-data");
const favicon = require("serve-favicon");
const path = require("path");
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use("/", router);

app.listen(3000);
