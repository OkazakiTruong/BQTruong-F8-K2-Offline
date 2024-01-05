const db = require("../utils/db");
module.exports = {
  index: (req, res) => {
    console.log(db);
    res.render("home/index");
  },
};
