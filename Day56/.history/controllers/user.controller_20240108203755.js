const model = require("../models/index");
const { object, string, number, date, InferType } = require("yup");
const Users = model.Users;

module.exports = {
  index: (req, res) => {},
  register: async (req, res) => {
    // const users = await Users.findAll();
    // console.log(users[0].dataValues.user_email);
    const errors = req.flash("errors") || {};

    res.render("register/register", { errors: errors[0] });
  },
  handleRegister: async (req, res) => {
    let body = await req.validate(req.body, {
      email: string().required("Không được bỏ trống Email"),
      password: string().required("Không được bỏ trống mật khẩu"),
      rePassword: string().required(
        "Không được bỏ trống phần nhập lại mật khẩu"
      ),
    });
    console.log(body);
    res.redirect("/users/register");
  },
  login: (req, res) => {
    res.render("login/login");
  },
  handleLogin: (req, res) => {
    res.send("Đăng nhập thành công!");
  },
};
