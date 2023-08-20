const express = require('express');
const routes = require('../dist/routes/routes');

const app = express();

app.use('/api', routes);


const mysql = require('mysql');

const port = 3306;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});


require('dotenv').config();

// Load connection URI from .env
const dbUrl = process.env.MYSQL_URL;

// Connect to database
const db = mysql.createConnection(dbUrl);

db.connect();