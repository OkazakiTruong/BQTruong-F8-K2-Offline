/*
- Mỗi model sẽ tương ứng với 1 table
- 1 controller có thể có nhiều model
*/
const sql = require("../utils/db");

module.exports = {
  all: (keyword = null) => {
    return sql`Select * FROM courses`;
  },
  get: () => {},
  create: () => {},
  update: () => {},
  destroy: () => {},
};
