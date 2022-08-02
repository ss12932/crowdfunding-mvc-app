const { Project, User } = require('../../models');

const renderSignupPage = (req, res) => {
  // render page only if user is not logged in
  if (!req.session.loggedIn) {
    return res.render('signup');
  }

  return res.redirect('/');
};

const renderLoginPage = (req, res) => {
  // render page only if user is not logged in
  if (!req.session.loggedIn) {
    return res.render('login');
  }

  return res.redirect('/');
};
const renderSingleProjectPage = (req, res) => {
  const { loggedIn } = req.session;
  return res.render('singleProject', { loggedIn });
};
const renderHomePage = async (req, res) => {
  // get loggedIn user info from session
  const { loggedIn } = req.session;
  // need to deserialize data
  const projectsFromDB = await Project.findAll({
    include: [
      {
        model: User,
        attributes: ['name', 'email'],
      },
    ],
  });

  const projects = projectsFromDB.map((project) =>
    project.get({ plain: true })
  );

  console.log(projects);

  console.log(projects);
  return res.render('homepage', { loggedIn });
};
module.exports = {
  renderSignupPage,
  renderLoginPage,
  renderSingleProjectPage,
  renderHomePage,
};
