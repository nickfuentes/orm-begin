'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Task.associate = function (models) {
    Task.belongsTo(models.Context, {
      foreignKey: 'ContextId',
      onDelete: 'CASCADE'
    });
  };
  return Task;
};