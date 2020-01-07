const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize('bingo', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});


const models = [
    require('./models/user'),
    require('./models/square'),
];

// Initialize models
models.forEach(model => {
    const seqModel = model(sequelize, Sequelize)
    db[seqModel.name] = seqModel
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
