module.exports = {
  index: (req, res) => {},
  register: (req, res) => {
    res.render("register/register");
  },
  handleRegister: (req, res) => {
    res.send("Đăng ký thành công!");
  },
  login: (req, res) => {
    res.render("login/login");
  },
};
