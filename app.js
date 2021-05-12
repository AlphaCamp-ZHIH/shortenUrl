const bodyParser = require("body-parser");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req, res) =>{
 res.render('index');
});

app.listen(port, () => {
  console.log(`operate server successfully`);
});
