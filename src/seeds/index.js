const connection = require('../config/connection');
const Users = require('./users');
const projects = require('./projects');
const User = require('../models/User');
const Project = require('../models/Project');
const users = require('./users');

const seedAll = async () => {
  try {
    await connection.sync({ force: true });
    console.log('DB sync successful');
    await User.bulkCreate(users);
    console.log('users seed successful');
    await Project.bulkCreate(projects);
    console.log('projects seed successful');
  } catch (err) {
    console.log(`[ERROR]: Seed failed | ${err.message} `);
  }

  process.exit(0);
};
seedAll();
