const model = require("../models/index");
const { object, string, number, date, InferType } = require("yup");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const UserModel = require("../models/users");

module.exports = {
  index: (req, res) => {},
  register: async (req, res) => {
    console.log(req.errors);
    res.render("register/register", { req });
  },
  handleRegister: async (req, res) => {
    let body = await req.validate(req.body, {
      email: string().required("Không được bỏ trống Email"),
      password: string().required("Không được bỏ trống mật khẩu"),
      rePassword: string().required(
        "Không được bỏ trống phần nhập lại mật khẩu"
      ),
    });
    if (body.password !== body.rePassword) {
      req.flash("errors", {
        errRepassword: "Mật khẩu không trùng khớp",
      });
      return res.redirect("/users/register");
    }
    if (body) {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(body.password, salt,asyn function (err, hash) {
          const user = await UserModel.create({user_email: body.email,user_password: body.password})
        });
      });
      // console.log(body);
      // return res.redirect("/users/login");
    }
    res.redirect("/users/register");
  },
  login: (req, res) => {
    res.render("login/login");
  },
  handleLogin: (req, res) => {
    res.send("Đăng nhập thành công!");
  },
};
