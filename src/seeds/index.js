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

    const userPromises = users.map((user) => User.create(user));
    // this will create a list of all promises for users. but for each of these promises, will dispatch everything at once, one by one then at this pt, hook will kick in for beforeCreate hash pw, nothing for bulkcreate as we did before. instead of bulk create, do one at a time.
    await Promise.all(userPromises);
    // await User.bulkCreate(users);
    console.log('users seed successful');

    await Project.bulkCreate(projects);
    console.log('projects seed successful');
  } catch (err) {
    console.log(`[ERROR]: Seed failed | ${err.message} `);
  }

  process.exit(0);
};
seedAll();
