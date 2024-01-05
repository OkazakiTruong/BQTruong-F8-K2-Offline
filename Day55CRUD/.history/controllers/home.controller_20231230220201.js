const { log } = require("debug/src/node");
const courseModel = require("../models/course.model");
const moment = require("moment");
module.exports = {
  index: async (req, res) => {
    //read data from table courses
    try {
      const { keyword } = req.query;
      console.log(keyword);
      const courses = await courseModel.all(keyword);
      res.render("home/index", { courses: courses, moment });
    } catch (error) {
      //   throw new Error(error.message);
    }
  },
};
