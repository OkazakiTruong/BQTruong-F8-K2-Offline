const courseModel = require("../models/course.model");
const moment = require("moment");
module.exports = {
  index: async (req, res) => {
    //read data from table courses
    try {
      const { keyword } = req.query;
      const courses = await courseModel.all(keyword);
      res.render("home/index", { courses: courses, moment });

      console.log(courses);
    } catch (error) {
      //   throw new Error(error.message);
    }
  },
};
