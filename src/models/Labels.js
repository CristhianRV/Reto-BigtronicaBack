const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const labelSchema = new Schema({
	name: String,
});

module.exports = model('Label', labelSchema);
