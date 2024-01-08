const { Sequelize } = require("sequelize");
module.exports = {
  index: (req, res) => {},
  register: async (req, res) => {
    res.render("register/register");
  },
  handleRegister: (req, res) => {
    res.send("Đăng ký thành công!");
  },
  login: (req, res) => {
    res.render("login/login");
  },
  handleLogin: (req, res) => {
    res.send("Đăng nhập thành công!");
  },
};
