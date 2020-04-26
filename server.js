const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

require("chart.js");

app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("overview", { res });
});

app.get("/stroom", (req, res) => {
  res.render("stroom", { res });
});

app.get("/zon", (req, res) => {
  res.render("zon", { res });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
