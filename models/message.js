'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  // Message.associate = function(models) {
  //   // associations can be defined here
  //   Message.belongsTo(models.user)
  // };
  return Message;
};