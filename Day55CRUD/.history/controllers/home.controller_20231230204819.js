const courseModel = require("../models/course.model");
module.exports = {
  index: async (req, res) => {
    //read data from table courses
    try {
      const courses = await courseModel.all();
      res.render("home/index");

      console.log(courses);
    } catch (error) {
      //   throw new Error(error.message);
    }
  },
};
