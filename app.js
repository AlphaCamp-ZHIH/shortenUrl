const bodyParser = require("body-parser");
const express = require("express");
const exphbs = require("express-handlebars");
const generateShortenUrl = require("./helper/helper").generateShortenUrl;
const ShortenUrl = require("./models/shortenUrl");
const { isOriginUrlExist } = require('./middleware/middleware')


require("./config/mongoose");
const app = express();

app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const port = 3000;
const INDEX = "http://localhost:3000/"
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", isOriginUrlExist, (req, res) => {
  let shortenUrl = generateShortenUrl();
  const { originUrl } = req.body;
  ShortenUrl.find()
    .select("shortenUrl -_id")
    .lean()
    .then((data) => {
      while (data.find((item) => item.shortenUrl === shortenUrl)) {
        shortenUrl = generateShortenUrl();
      }
      return ShortenUrl.create({
        originUrl,
        shortenUrl,
      }).then(shortenUrl);
    })
    .then((shortenUrl) =>
      res.render("index", { content: INDEX + shortenUrl.shortenUrl })
    )
    .catch((e) => {
      console.log(e);
    });
});

app.get("/:shortenUrl", (req, res) => {
  const shortenUrl = req.params.shortenUrl;
  ShortenUrl.findOne({ shortenUrl })
    .lean()
    .then((url) => {
      res.redirect(`${url.originUrl}`);
    });
});

app.listen(port, () => {
  console.log(`operate server successfully`);
});
