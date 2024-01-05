const sql = require("../utils/db");
module.exports = {
  index: async (req, res) => {
    //read data from table courses
    const courses = await sql`Select * FROM courses`;
    console.log(courses);
    res.render("home/index");
  },
};
