/*
- Mỗi model sẽ tương ứng với 1 table
- 1 controller có thể có nhiều model
*/
const sql = require("../utils/db");

module.exports = {
  all: (keyword = null) => {
    const filter = keyword
      ? sql`WHERE LOWER(name) LIKE ${"%" + keyword + "%"}`
      : sql``;
    return sql`SELECT * FROM courses ${filter} ORDER BY id DESC`;
  },
  get: () => {},
  create: () => {},
  update: () => {},
  destroy: () => {},
};
