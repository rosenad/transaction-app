const router = require('express').Router();
let Transaction = require('../models/transaction.model');

router.route('/').get((req, res) => {
  Transaction.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const gender = req.body.gender;
  const country = req.body.country;
  const city = req.body.city;
  const street = req.body.street;
  const phone = req.body.phone;
  const totalPrice = req.body.totalPrice;
  const currency = req.body.currency;
  const creditCardType = req.body.creditCardType;
  const creditCardNumber = req.body.creditCardNumber;

  const newTransaction = new Transaction({
    firstName,
    lastName,
    email,
    gender,
    country,
    city,
    street,
    phone,
    totalPrice,
    currency,
    creditCardType,
    creditCardNumber
  });
  newTransaction.save()
  .then(() => res.json('Transaction added!'))
  .catch(err => console.log(err));
});

router.route('/:id').get((req, res) => {
  Transaction.findById(req.params.id)
    .then(transaction => res.json(transaction))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Transaction.findByIdAndDelete(req.params.id)
    .then(() => res.json('Transaction deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Transaction.findById(req.params.id)
    .then(transaction => {
      transaction.firstName = req.body.firstName;
      transaction.lastName = req.body.lastName;
      transaction.email = req.body.email;
      transaction.gender = req.body.gender;
      transaction.country = req.body.country;
      transaction.city = req.body.city;
      transaction.street = req.body.street;
      transaction.phone = req.body.phone;
      transaction.totalPrice = req.body.totalPrice;
      transaction.currency = req.body.currency;
      transaction.creditCardType = req.body.creditCardType;
      transaction.creditCardNumber = req.body.creditCardNumber;

      transaction.save()
        .then(() => res.json('Transaction updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
