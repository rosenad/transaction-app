const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	gender: { type: String, required: true },
	street: { type: String, required: true },
	city: { type: String, required: true },
	country: { type: String, required: true },
	phone: { type: String, required: true },
	totalPrice: { type: String, required: true },
	currency: { type: String, required: true },
	creditCardType: { type: String, required: true },
	creditCardNumber: { type: String, required: true }
})

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
