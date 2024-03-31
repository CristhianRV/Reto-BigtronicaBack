const dataProducts = require('./products.json');
const dataLabels = require('./labels.json');
const Product = require('../models/Products.js');
const Label = require('../models/Labels.js');
const mongoose = require('mongoose');

const uploadProducts = async () => {
	const products = await Product.find();
	if (products.length === 0) {
		dataProducts.forEach(
			(product) => (product.id = new mongoose.Types.ObjectId()),
		);
		await Product.insertMany(dataProducts);
	}
};

const uploadLabels = async () => {
	const labels = await Label.find();
	if (labels.length === 0) await Label.insertMany(dataLabels);
};

module.exports = {
	uploadProducts,
	uploadLabels,
};
