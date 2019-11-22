module.exports = function (sequelize, DataTypes) {
    var Stat = sequelize.define("stat", {
        stats: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        }
        // league_id: {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model: League,
        //         key: "id",
        //         allowNull: false
        //     }
        // },
        // team_id: {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model: Team,
        //         key: "id",
        //         allowNull: false
        //     }
        // },
        // user_id: {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model: User,
        //         key: "id",
        //         allowNull: false
        //     }
        // },
        // stats_defined_id: {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model: User,
        //         key: "id",
        //         allowNull: false
        //     }
        // },


    });
    return Stat;
};

