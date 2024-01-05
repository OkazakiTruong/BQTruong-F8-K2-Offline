const courseModel = require("../models/course.model");
const moment = require("moment");
const { object, string, number } = require("yup");

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
    res.render("home/add", { req });
  },
  handleAdd: async (req, res) => {
    /*
    validate:
    - Tên: Bắt buộc, không bị trùng
    - Giá: Bắt buộc, số
    Insert Database
    Redirect kèm thông báo
    */
    const body = await req.validate(req.body, {
      name: string()
        .required("Tên khóa học bắt buộc phải nhập")
        .test(
          "check-course-unique",
          "Tên khóa học đã tồn tại",
          async (value) => {
            return await courseModel.courseUnique(value);
          }
        ),
      price: string()
        .required("Giá khóa học bắt buộc phải nhập")
        .test("check-number", "Giá khóa học phải là số", (value) => {
          value = +value;
          if (!isNaN(value)) {
            return true;
          } else {
            return false;
          }
        }),
    });
    console.log(body);
    return res.redirect("/add");
  },
};
