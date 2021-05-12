const ShortenUrl = require("../models/shortenUrl");

module.exports.isOriginUrlExist = (req, res, next) => {
  const { originUrl } = req.body;
  ShortenUrl.findOne({ originUrl })
  .select('shortenUrl -_id')
    .lean()
    .then((url) => {
      if(url){
        return res.render('index',{content:url.shortenUrl})
      }else{
        next()
      }
    });
};
