class Project extends Model {}

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
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date_created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  needed_funding: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id',
    },
  },
};
const options = {
  sequelize: Connection,
  underscored: true,
  timestamps: true,
  freezeTableName: true,
  modelName: 'user',
};

Project.init(schema, options);

module.exports = Project;
