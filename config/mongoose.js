const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/shortenUrl", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.on("error", (e) => {
  console.log(e);
});
db.once("open", () => {
  console.log("mongodb connect");
});
