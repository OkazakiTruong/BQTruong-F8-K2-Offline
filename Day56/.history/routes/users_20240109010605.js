var express = require("express");
var router = express.Router();
const userController = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/register", userController.register);
router.post("/register", userController.handleRegister);
router.get("/login", userController.login);
router.post("/login", userController.handleLogin);
router.get("/logout", userController.handleLogout);

module.exports = router;
