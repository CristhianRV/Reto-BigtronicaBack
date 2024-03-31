const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const productSchema = new Schema({
	id: String,
	name: String,
	description: String,
	image: String,
	label: String,
	stock: Number,
	price: String,
});

module.exports = model('Product', productSchema);
