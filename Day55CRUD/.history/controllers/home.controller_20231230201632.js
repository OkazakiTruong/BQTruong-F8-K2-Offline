const sql = require("../utils/db");
module.exports = {
  index: (req, res) => {
    console.log(sql);
    res.render("home/index");
  },
};
