const courseModel = require("../models/course.model");
const moment = require("moment");
module.exports = {
  index: async (req, res) => {
    //read data from table courses
    try {
      const courses = await courseModel.all();
      res.render("home/index", { courses: courses });

      console.log(courses);
    } catch (error) {
      //   throw new Error(error.message);
    }
  },
};
