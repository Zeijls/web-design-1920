const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("overview", { res });
});

app.get("/herbruikbaar", (req, res) => {
  res.render("herbruikbaar", { res });
});

app.get("/fossiel", (req, res) => {
  res.render("fossiel", { res });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
