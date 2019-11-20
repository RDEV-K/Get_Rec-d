module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
        team_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        wins: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        losses: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        ties: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        games_played: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        stat_1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        stat_2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        stat_3: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        stat_4: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        stat_5: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        }
    });

    Team.associate = function (models) {
        // We're saying that a Team should belong to an Author
        // A Team can't be created without an League due to the foreign key constraint
        Team.belongsTo(models.League, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Team;
};
