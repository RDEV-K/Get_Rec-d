module.exports = function(sequelize, DataTypes) {
    var League = sequelize.define("League", {
      // Giving the League model a name of type STRING
      league_name: DataTypes.STRING,
    });
  
    League.associate = function(models) {
      // Associating League with Teams
      // When a League is deleted, also delete any associated Teams
      League.hasMany(models.Team, {
        onDelete: "cascade"
      });
    };
  
    return League;
  };
  