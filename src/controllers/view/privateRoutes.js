const renderCreateProjectPage = (req, res) => {
  return res.render('createProjectPage');
};
const renderProfilePage = (req, res) => {
  return res.render('profile');
};
module.exports = {
  renderCreateProjectPage,
  renderProfilePage,
};
