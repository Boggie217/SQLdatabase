const { DataTypes } = require('sequelize');
const db = require('./db');

//this file defines the logic for the author and book files, the files themselves contain the schema


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

const Book = db.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});



//Logic below



const db = require('./db'); // database connection

module.exports = {

  create: (data, callback) => {
    let sql = 'INSERT INTO table SET ?';
    db.query(sql, data, callback);
  },

  read: (condition, callback) => { 
    let sql = 'SELECT * FROM table WHERE ?';
    db.query(sql, condition, callback);
  },

  update: (data, condition, callback) => {
    let sql = 'UPDATE table SET ? WHERE ?';
    db.query(sql, [data, condition], callback);
  },

  delete: (condition, callback) => {
    let sql = 'DELETE FROM table WHERE ?'; 
    db.query(sql, condition, callback);
  }

};
















Book.belongsTo(Author);
Author.hasMany(Book);

module.exports = { Author, Book };