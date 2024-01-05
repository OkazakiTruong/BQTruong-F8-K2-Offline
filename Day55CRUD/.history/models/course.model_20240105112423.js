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
    const result =
      await sql`Select id from courses where name = ${name.trim()}`;
    if (result.length) {
      return false;
    }
    return true;
  },
  get: async (id) => {
    return sql`SELECT * FROM courses WHERE id = ${id}`;
  },
  create: async (name, price, status) => {
    return sql`INSERT INTO courses(name,price,status) VALUES(${name},${price},${
      status === "active" ? true : false
    })`;
  },
  update: async (id, name, price, status) => {
    return sql`UPDATE courses SET name=${name}, price=${price},status=${
      status === "active" ? true : false
    },updated_at=${new Date()} WHERE id = ${id}`;
  },
  destroy: () => {},
};

/*
Select * from courses ORDER BY id DESC
Nếu muốn filter theo status
Select * FROM courses WHERE status=${status} ORDER BY id DESC

Nếu muốn filter theo keyword 
Select * FROM courses WHERE name LIKE ${'%'+keyword+'%'} ORDER BY id DESC
*/
