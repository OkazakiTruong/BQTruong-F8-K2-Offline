const model = require("../models/index");
const { object, string, number, date, InferType } = require("yup");
const Users = model.Users;

module.exports = {
  index: (req, res) => {},
  register: async (req, res) => {
    const users = await Users.findAll();
    console.log(users[0].dataValues.user_email);
    res.render("register/register");
  },
  handleRegister: async (req, res) => {
    let userSchema = object({
      email: string().required("Không được bỏ trống Email"),
      password: string().required("Không được bỏ trống mật khẩu"),
      rePassword: string().required(
        "Không được bỏ trống phần nhập lại mật khẩu"
      ),
    });
    try {
      const user = await userSchema.validate(req.body, {
        abortEarly: false,
      });
      console.log(user);
      res.send("Đăng ký thành công!");
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map((item) => {
          [item.path, item.message];
        })
      );
    }
  },
  login: (req, res) => {
    res.render("login/login");
  },
  handleLogin: (req, res) => {
    res.send("Đăng nhập thành công!");
  },
};
