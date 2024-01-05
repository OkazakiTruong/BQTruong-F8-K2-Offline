const sql = require("../utils/db");
module.exports = {
  index: async (req, res) => {
    //read data from table courses
    try {
      const courses = await sql`Select * FROM courses1`;
      console.log(courses);
    } catch (error) {
      throw new Error(error);
    }
    res.render("home/index");
  },
};
