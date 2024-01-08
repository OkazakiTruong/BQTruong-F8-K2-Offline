const { object } = require("yup");

module.exports = (req, res, next) => {
  const errors = req.flash("errors");
  req.errors = errors.length ? errors[0] : {};
  req.validate = async (body, rule = {}) => {
    const schema = object(rule);
    try {
      const user = await schema.validate(req.body, {
        abortEarly: false,
      });
      return user;
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map((item) => {
          return [item.path, item.message];
        })
      );
      req.flash("errors", errors);
    }
  };
  next();
};
