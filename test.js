const models = require('./models');
const Sequelize = require('sequelize')

models.Buku.create({
    name: 'komik one peace',
    price: 15000,
    qtt: 20
})