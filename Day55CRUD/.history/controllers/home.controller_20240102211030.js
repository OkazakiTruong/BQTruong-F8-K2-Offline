const courseModel = require("../models/course.model");
const moment = require("moment");
const { object, string, number, integer } = require("yup");

module.exports = {
  index: async (req, res) => {
    //read data from table courses
    try {
      const { keyword, status } = req.query;
      const courses = await courseModel.all(keyword, status);
      const debug = await courseModel.all(keyword, status).describe();
      console.log(debug);

      res.render("home/index", { courses: courses, moment });
    } catch (error) {
      //   throw new Error(error.message);
    }
  },
  add: (req, res) => {
    res.render("home/add");
  },
  handleAdd: async (req, res) => {
    /*
    validate:
    - Tên: Bắt buộc, không bị trùng
    - Giá: Bắt buộc, số
    Insert Database
    Redirect kèm thông báo
    */
    const schema = object({
      name: string().required("Tên khóa học bắt buộc phải nhập"),
      price: string().required("Giá khóa học bắt buộc phải nhập"),
    });
    try {
      const body = await schema.validate(req.body, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = Object.fromEntries(
        error.inner.map((item) => [item.path, item.message])
      );
      req.flash("errors", errors);
    }
    return res.redirect("/add");
  },
};
