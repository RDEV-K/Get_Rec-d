module.exports = function (sequelize, DataTypes) {
    var Stat = sequelize.define("stat", {
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
        }

    });
    return Stat;
};

