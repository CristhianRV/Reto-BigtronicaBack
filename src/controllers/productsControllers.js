const Product = require('../models/Products.js');
const Label = require('../models/Labels.js');
const mongoose = require('mongoose');

const allProducts = async (req, res) => {
	try {
		let product = [];

		product = await Product.find();

		res.status(200).json(product);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const productID = async (req, res) => {
	try {
		const { id } = req.params;
		let product = {};

		product = await Product.find({
			id,
		});

		res.status(200).json(product);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const allLabels = async (req, res) => {
	try {
		let label = [];
		label = await Label.find();
		res.status(200).json(label);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

module.exports = {
	allProducts,
	productID,
	allLabels,
};
