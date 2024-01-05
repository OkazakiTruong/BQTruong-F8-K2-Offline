const courseModel = require("../models/course.model");
const moment = require("moment");
const { object, string, number } = require("yub");
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
    res.send("add");
  },
};
