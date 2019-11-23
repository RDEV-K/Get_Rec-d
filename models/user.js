module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: DataTypes.STRING,
      userpassword: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      zipcode: DataTypes.INTEGER      
    });
  
    User.associate = function(models) {
      User.hasMany(models.Message, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };

