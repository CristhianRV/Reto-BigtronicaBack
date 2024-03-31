const {
	allProducts,
	productID,
	allLabels,
} = require('../controllers/productsControllers.js');

const { Router } = require('express');

const routeProducts = Router();

routeProducts.get('/allProducts', allProducts);
routeProducts.get('/labels', allLabels);
routeProducts.get('/:id', productID);

module.exports = routeProducts;
