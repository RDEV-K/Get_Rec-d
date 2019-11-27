'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    userName: {
      type: DataTypes.STRING,
      //only letters
      is: ["^[a-z]+$", 'i'],
      //between 3 and 25 chars
      len: [3, 25],
      notEmpty: true,
    },
    firstName: {
      type: DataTypes.STRING,
      //only letters
      is: ["^[a-z]+$", 'i'],
      //between 2 and 25 chars
      len: [2, 25],
      notEmpty: true,
    },
    lastName: {
      type: DataTypes.STRING,
      //only letters
      is: ["^[a-z]+$", 'i'],
      //between 2 and 25 chars
      len: [2, 25],
      notEmpty: true,
    },
    password: {
      type: DataTypes.STRING,
      notEmpty: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      isNumeric: true,
      len: [10, 11],
      notEmpty: true
    },

    zip: {
      type: DataTypes.STRING,
      isNumeric: true,
      len: [5],
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.team, { as: 'Teams', through: 'teamUserXR' })
    User.hasMany(models.message)

  };
  return User;
};