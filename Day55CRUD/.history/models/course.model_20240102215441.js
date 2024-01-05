/*
- Mỗi model sẽ tương ứng với 1 table
- 1 controller có thể có nhiều model
*/
const sql = require("../utils/db");

module.exports = {
  all: (keyword = null, status) => {
    // const filter = keyword
    //   ? sql`WHERE LOWER(name) LIKE LOWER(${"%" + keyword + "%"})`
    //   : sql``;
    let filter = sql`WHERE name IS NOT NULL`;
    if (status === "active" || status === "inactive") {
      filter = sql`${filter} AND status = ${
        status === "active" ? true : false
      }`;
    }
    if (keyword) {
      filter = sql`${filter} AND LOWER(name) LIKE LOWER(${
        "%" + keyword + "%"
      })`;
    }
    return sql`SELECT * FROM courses ${filter} ORDER BY id DESC`;
  },
  courseUnique: async (name) => {
    const result = await sql`Select id from courses where name ${name.trim()}`;
  },
  get: () => {},
  create: () => {},
  update: () => {},
  destroy: () => {},
};

/*
Select * from courses ORDER BY id DESC
Nếu muốn filter theo status
Select * FROM courses WHERE status=${status} ORDER BY id DESC

Nếu muốn filter theo keyword 
Select * FROM courses WHERE name LIKE ${'%'+keyword+'%'} ORDER BY id DESC
*/
