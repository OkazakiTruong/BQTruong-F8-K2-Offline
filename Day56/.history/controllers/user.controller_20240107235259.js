module.exports = {
  index: (req, res) => {},
  register: (req, res) => {
    res.render("register/register");
  },
  login: (req, res) => {
    res.render("register/login");
  },
};
