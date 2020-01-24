'use strict';
module.exports = (sequelize, DataTypes) => {
  const Buku = sequelize.define('Buku', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    qtt: DataTypes.INTEGER
  }, {});
  Buku.associate = function(models) {
    // associations can be defined here
  };
  return Buku;
};