const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const transactionsRouter = require('./routers/transactionRouter');
// const customersRouter = require('./routers/customers');

app.use('/transactions', transactionsRouter);
// app.use('/customers', customersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
