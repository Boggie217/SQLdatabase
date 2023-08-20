const { DataTypes } = require('sequelize');
const db = require('./db');

//create then schema for author

const Author = db.define('Author', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  } 
});

//add CRUD functions






module.exports = Author;
