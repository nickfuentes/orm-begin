'use strict';
module.exports = (sequelize, DataTypes) => {
  const Context = sequelize.define('Context', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Context.associate = function (models) {
    Context.hasMany(models.Task, {
      foriegnKey: 'ContextId',
      onDelete: 'CASCADE'
    });

    Context.belongsTo(models.User, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE'
    });
  };
  return Context;
};