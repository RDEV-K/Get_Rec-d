'use strict';
module.exports = (sequelize, DataTypes) => {
  const testdelete = sequelize.define('testdelete', {
    name: DataTypes.STRING,
    delete: DataTypes.INTEGER
  }, {});
  testdelete.associate = function(models) {
    // associations can be defined here
  };
  return testdelete;
};