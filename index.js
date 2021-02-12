const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.render("index.ejs", { color: "0079FC", tags: { title: "Open Graph Protocol Proxy", description: "Example: /0079FC?title=Open+Graph+Protocol+Proxy" } });
})

app.get("/:color", (req, res) => {
  return res.render("index.ejs", { color: req.params.color, tags: Object.entries(req.query) });
});

app.listen(process.env.PORT || 8080);