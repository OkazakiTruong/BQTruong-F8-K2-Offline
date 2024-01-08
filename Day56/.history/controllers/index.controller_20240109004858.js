module.exports = {
  index: (req, res) => {
    console.log(req.session.user.userEmail);
    res.render("index", { req });
  },
};
