const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

require("chart.js");

app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("home", { res });
});

app.get("/overview", (req, res) => {
  res.render("overview", { res });
});

app.get("/day", (req, res) => {
  res.render("day", { res });
});

app.get("/month", (req, res) => {
  res.render("month", { res });
});

app.get("/year", (req, res) => {
  res.render("year", { res });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
