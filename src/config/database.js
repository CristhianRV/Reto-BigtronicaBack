const mongoose = require('mongoose');
require('dotenv').config();
const { DB_HOST, DB_PORT, DB_DATABASE } = process.env;

const db = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

mongoose
	.connect(db, {
		useNewUrlParser: true,
	})
	.then((db) => console.log('successful connection'))
	.catch((err) => console.log('Error Conection', err));

module.exports = db;
