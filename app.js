const bodyParser = require("body-parser");
const express = require("express");
const exphbs = require("express-handlebars");
const generateShortenUrl = require('./helper/helper').generateShortenUrl;

const app = express();

app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  console.log(generateShortenUrl())
  res.render("index");
});
app.post("/", (req, res) => {
  const { originUrl } = req.body;

});

app.listen(port, () => {
  console.log(`operate server successfully`);
});
