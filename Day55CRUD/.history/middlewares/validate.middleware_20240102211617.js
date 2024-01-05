module.exports = (req, res, next) => {
  const errors = req.flash("errors");
  req.errors = errors.length ? errors[0] : {};
  //Sửa request
  req.validate = (body, rule = {}) => {};
  next();
};
