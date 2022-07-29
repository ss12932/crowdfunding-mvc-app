const renderSignupPage = (req, res) => {
  return res.render('signup');
};
const renderLoginPage = (req, res) => {
  return res.render('login');
};
const renderSingleProjectPage = (req, res) => {
  return res.render('singleProject');
};
const renderHomePage = (req, res) => {
  return res.render('homepage');
};
module.exports = {
  renderSignupPage,
  renderLoginPage,
  renderSingleProjectPage,
  renderHomePage,
};
