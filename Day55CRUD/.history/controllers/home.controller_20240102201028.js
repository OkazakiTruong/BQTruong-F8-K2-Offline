const { log } = require("debug/src/node");
const courseModel = require("../models/course.model");
const moment = require("moment");
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
};
