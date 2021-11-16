const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
	first_name: { type: String, required: true },
	last_Name: { type: String, required: true },
	email: { type: String, required: true },
	gender: { type: String, required: true },
	country: { type: String, required: true },
	city: { type: String, required: true },
	street: { type: String, required: true },
	phone: { type: String, required: true },
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
