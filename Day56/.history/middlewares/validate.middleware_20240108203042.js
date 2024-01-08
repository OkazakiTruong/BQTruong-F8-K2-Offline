const { object } = require("yup");

module.exports = (req, res, next) => {
  req.validate = async (body, rule = {}) => {
    try {
      const user = await userSchema.validate(req.body, {
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
      res.redirect("/users/register");
    }
  };
};
