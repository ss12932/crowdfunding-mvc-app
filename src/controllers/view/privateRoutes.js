const { Project, User } = require('../../models');

const renderCreateProjectPage = (req, res) => {
  return res.render('createProjectPage');
};
const renderProfilePage = async (req, res) => {
  const { loggedIn, user } = req.session;
  const projectsFromDB = await Project.findAll({
    where: {
      user_id: user.id,
    },
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
  return res.render('profile', { loggedIn, user, projects });
};
module.exports = {
  renderCreateProjectPage,
  renderProfilePage,
};
