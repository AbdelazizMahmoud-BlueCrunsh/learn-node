const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:root@127.0.0.1:5432/test', {
    logging: console.logO
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataTypes = DataTypes;

//db.users = require("./learnModel")(sequelize, Sequelize);
module.exports = db;