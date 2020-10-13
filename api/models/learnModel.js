var db = require("./index");

const User = db.sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: db.DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: db.DataTypes.STRING
    },
    email: {
        type: db.DataTypes.STRING
    }, password: {
        type: db.DataTypes.STRING
    }, token: {
        type: db.DataTypes.STRING
    }
}, {
    // Other model options go here
});

module.exports = User;

