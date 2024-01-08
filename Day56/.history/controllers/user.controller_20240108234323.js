const model = require("../models/index");
const { object, string, number, date, InferType } = require("yup");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Users = model.Users;

module.exports = {
  index: (req, res) => {},
  register: async (req, res) => {
    res.render("register/register", { req });
  },
  handleRegister: async (req, res) => {
    let body = await req.validate(req.body, {
      email: string().required("Không được bỏ trống Email!"),
      password: string().required("Không được bỏ trống mật khẩu!"),
      rePassword: string().required(
        "Không được bỏ trống phần nhập lại mật khẩu!"
      ),
    });
    if (body.password !== body.rePassword) {
      req.flash("errors", {
        errRepassword: "Mật khẩu không trùng khớp",
      });
      return res.redirect("/users/register");
    }
    if (body) {
      const check = await Users.findOne({ where: { user_email: body.email } });
      if (check !== null) {
        req.flash("errors", {
          emailExist: "Tài khoản đã tồn tại!!",
        });
        return res.redirect("/users/register");
      }
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(body.password, salt, async function (err, hash) {
          const user = await Users.create({
            user_email: body.email,
            user_password: hash,
          });
          if (user) {
            res.flash("msg", {
              msg: "Tạo tài khoản thành công!!!",
            });
            return res.redirect("/users/login");
          }
        });
      });
      // console.log(body);
      // return res.redirect("/users/login");
    }
    res.redirect("/users/register");
  },
  login: (req, res) => {
    res.render("login/login", { req });
  },
  handleLogin: async (req, res) => {
    let body = await req.validate(req.body, {
      email: string().required("Không được bỏ trống Email!"),
      password: string().required("Không được bỏ trống mật khẩu!"),
    });
    if (body) {
      const check = await Users.findOne({ where: { user_email: body.email } });
      if (check === null) {
        req.flash("errors", {
          emailNotExist: "Tài khoản không tồn tại!!",
        });
        return res.redirect("/users/login");
      }
      console.log(check);
      //   bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
      //     // result == true
      // });
    }
    // return res.redirect("/");
  },
};
