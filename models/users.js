'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    saldo: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN    
  }, {
    hooks: {
      beforeCreate: (Users, option) => {
        return bcrypt.hash(Users.password, 10).then(hashed => {
          Users.password = hashed;
        })
      }
    }
  });
  Users.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
  }
  
  Users.associate = function(models) {
    // associations can be defined here
  };

  return Users;
};