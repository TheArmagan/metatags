const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("OGPP");
})

app.get("/:color", (req, res) => {
  return res.render("index.ejs", { color: req.params.color, tags: Object.entries(req.query) })
});

app.listen(process.env.PORT || 8080);