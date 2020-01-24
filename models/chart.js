'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chart = sequelize.define('Chart', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    qtt: DataTypes.INTEGER
  }, {});
  Chart.associate = function(models) {
    // associations can be defined here
  };
  return Chart;
};