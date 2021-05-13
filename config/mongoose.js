const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/shortenUrl'
mongoose.connect(MONGODB_URI, {
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
