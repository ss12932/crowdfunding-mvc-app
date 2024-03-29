const Project = require('./Project');
const User = require('./User');

Project.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Project, {
  foreignkey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Project,
  User,
};
