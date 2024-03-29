const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const connection = require('../config/connection');
const { hashPassword } = require('../hooks');

class User extends Model {
  checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8],
    },
  },
};
const options = {
  hooks: {
    // before creation of user, hash password
    beforeCreate: hashPassword,
  },
  sequelize: connection,
  underscored: true,
  timestamps: true,
  freezeTableName: true,
  modelName: 'user',
};

User.init(schema, options);

module.exports = User;
