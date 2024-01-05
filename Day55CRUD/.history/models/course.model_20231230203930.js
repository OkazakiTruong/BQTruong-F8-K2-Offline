/*
- Mỗi model sẽ tương ứng với 1 table
- 1 controller có thể có nhiều model
*/
module.exports = {
  all: () => {
    return sql`Select * FROM courses`;
  },
};
