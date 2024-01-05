const db = require("../utils/db");
module.exports = {
  index: (req, res) => {
    console.log(process.env.APP_NAME);
    res.render("home/index");
  },
};
