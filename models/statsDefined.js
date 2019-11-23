module.exports = function (sequelize, DataTypes) {
    var StatName = sequelize.define("stats_defined", {
        stat_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });

    // StatName.associate = function (models) {
    //     // We're saying that a Team should belong to an Author
    //     // A Team can't be created without an League due to the foreign key constraint
    //     StatName.belongsTo(models.Stat, {
    //         foreignKey: {
    //             reference: Stat,
    //             key: "id",
    //             allowNull: false
    //         }
    //     });
    // };

    return StatName;
};
