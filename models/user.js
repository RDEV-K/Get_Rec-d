module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
      userpassword: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      zipcode: DataTypes.INTEGER      
    });
  
    User.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      User.belongsToMany(models.Team, {
        foreignKey: {
            model: Team,
            key: "id",
            allowNull: false
        }
    });

    };
  
    return User;
  };

