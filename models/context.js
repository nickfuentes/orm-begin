'use strict';
module.exports = (sequelize, DataTypes) => {
  const Context = sequelize.define('Context', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Context.associate = function (models) {
    // associations can be defined here
  };
  return Context;
};