const ShortenUrl = require("../models/shortenUrl");
const INDEX = process.env.INDEX;

module.exports.isOriginUrlExist = (req, res, next) => {
  const { originUrl } = req.body;
  ShortenUrl.findOne({ originUrl })
    .select('shortenUrl -_id')
    .lean()
    .then((url) => {
      if (url) {
        return res.render('index', { content: INDEX + url.shortenUrl })
      } else {
        next()
      }
    });
};
