const model = require("../models/index");
const Users = model.Users;
module.exports = {
  index: (req, res) => {},
  register: async (req, res) => {
    const users = await Users.findAll();
    console.log(users[0].dataValues.user_email);
    res.render("register/register");
  },
  handleRegister: (req, res) => {
    console.log(req);
    res.send("Đăng ký thành công!");
  },
  login: (req, res) => {
    res.render("login/login");
  },
  handleLogin: (req, res) => {
    res.send("Đăng nhập thành công!");
  },
};
