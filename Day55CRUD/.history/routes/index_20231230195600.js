var express = require("express");
var router = express.Router();
const homeController = require("../controllers/home.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", homeController);
});

module.exports = router;
