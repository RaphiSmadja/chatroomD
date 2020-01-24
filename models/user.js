module.exports = function (sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pseudo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: DataTypes.STRING(1),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
    }, {
        tableName: "users",
        paranoid: true,
        freezeTableName: true
        // désactive la modification des noms de tableaux; Par défaut, la mise à jour automatiquement
        // transforme tous les noms de modèles passés (premier paramètre de définition) en pluriel.
        // si vous ne voulez pas cela, définissez le suivant
    });
    return Users;
};
